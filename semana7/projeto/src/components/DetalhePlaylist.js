import React, { Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const Main = styled.div`
display:flex;
flex-direction:column;
align-items: center;
` 
const Musicas = styled.div`
    width:96%;
`
const Musica = styled.p`
    border: 1px dotted black;
    display:flex;
    align-items:center;
    justify-content:space-between;
    p{
        display:flex;
        align-items:center;
    }
`
const Deletar = styled.button`
    background-color:red;
    
`


class DetalhePlaylist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            detalhePlaylist: undefined,
            inputNomeMusica: '',
            inputArtistas: '',
            inputUrlMusica: ''
        }
    }
    componentDidMount() {
        this.detalheMusica()
    }

    deletarMusica = (idMusica) =>{
        const deletarMusicaPromisse = axios.delete(
            `${this.props.baseUrl}/playlists/removeMusicFromPlaylist?playlistId=${this.props.idPlaylist}&musicId=${idMusica}`,
            {
                headers: {
                    "auth": this.props.authToken
                }
            }
        )
        deletarMusicaPromisse.then(response=>{
            alert("Musica deletada da playlist")
            this.detalheMusica()
        })
        .catch(error=>{
            console.log(error)
        })
    }

    detalheMusica = () => {
        const detalheMusica = axios.get(
            `${this.props.baseUrl}/playlists/getPlaylistMusics/${this.props.idPlaylist}`,
            {
                headers: {
                    "auth": this.props.authToken
                }
            }
        )
        detalheMusica.then(response => {
            const detalhePlaylist = response.data.result.musics.map((musica, index) => {
                return (<Musica key={musica.id}>{musica.name} {musica.artist} <p><audio src={musica.url} controls>Seu navegador não suporta o audio</audio> <Deletar onClick={()=>{this.deletarMusica(musica.id)}}>DELETAR</Deletar></p></Musica>)
            })
            this.setState({ detalhePlaylist: detalhePlaylist })
        })
            .catch(error => {
                console.log(error)
            })
    }

    adicionaMusicaPlaylist = () => {
        
        const adicionaMusicaPlaylistPromisse = axios.put(
            `${this.props.baseUrl}/playlists/addMusicToPlaylist`,
            {


                "playlistId": this.props.idPlaylist,
                "music": {
                    "name": this.state.inputNomeMusica,
                    "artist": this.state.inputArtistas,
                    "url": this.state.inputUrlMusica
                }


            },
            {
                headers: {
                    "auth": this.props.authToken
                }
            }
        )
        adicionaMusicaPlaylistPromisse.then(response => {
            alert("Musica adicionada na playlist")
            this.detalheMusica()
        })
            .catch(error => {
                console.log(error)
            })
    }

    inputNomeMusicaControlado = (e) => {
        this.setState({ inputNomeMusica: e.target.value })
    }
    inputArtistasControlado = (e) => {
        this.setState({ inputArtistas: e.target.value })
    }
    inputUrlMusicaControlado = (e) => {
        this.setState({ inputUrlMusica: e.target.value })
    }

    render() {


        return (
            <Main>
                <h2>Musicas</h2>
                <Musicas>
                    {this.state.detalhePlaylist !== undefined ? this.state.detalhePlaylist : <Fragment>Carregando...</Fragment>}
                </Musicas>
                <hr />
                <h2>Adicionar musica na playlist</h2>
                <p>Nome da musica:</p>
                <input type="text" value={this.state.inputNomeMusica} onChange={this.inputNomeMusicaControlado} />
                <p>Artistas:</p>
                <input type="text" value={this.state.inputArtistas} onChange={this.inputArtistasControlado} />
                <p>Url da musica:</p>
                <input type="text" value={this.state.inputUrlMusica} onChange={this.inputUrlMusicaControlado} />
                <button onClick={this.adicionaMusicaPlaylist}>Adicionar musica</button>
            </Main>
        )
    }
}

export default DetalhePlaylist;
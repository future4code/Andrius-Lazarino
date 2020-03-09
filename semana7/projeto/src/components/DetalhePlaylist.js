import React, { Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const Main = styled.div`
display:flex;
flex-direction:column;
align-items: center;
`
const Musicas = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`
const Musica = styled.p`
    width:86%;
    padding-left:6%;
    padding-right:6%;
    border: 1px solid #878788;
    box-shadow: 0px 4px 5px 0px rgba(50, 50, 50, 0.86);
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
const Botao = styled.button`
  height: 40px;
  margin-top:19px;
  margin-bottom:16px;
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

    deletarMusica = (idMusica) => {
        const deletarMusicaPromisse = axios.delete(
            `${this.props.baseUrl}/playlists/removeMusicFromPlaylist?playlistId=${this.props.idPlaylist}&musicId=${idMusica}`,
            {
                headers: {
                    "auth": this.props.authToken
                }
            }
        )
        deletarMusicaPromisse.then(response => {
            alert("Musica deletada da playlist")
            this.detalheMusica()
        })
            .catch(error => {
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
                return (<Musica key={musica.id}> <div> <p> {musica.name} </p> <p> {musica.artist} </p> </div> <p><audio src={musica.url} controls>Seu navegador não suporta o audio</audio> <Deletar onClick={() => { this.deletarMusica(musica.id) }}>DELETAR</Deletar></p></Musica>)
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
                <h2>Musicas da playlist </h2>
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
                <Botao onClick={this.adicionaMusicaPlaylist}>Adicionar musica</Botao>
            </Main>
        )
    }
}

export default DetalhePlaylist;
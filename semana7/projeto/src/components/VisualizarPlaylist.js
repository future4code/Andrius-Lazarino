import React, { Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const Main = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const Titulo = styled.h2`
    text-align:center;
    font-family: 'Roboto', sans-serif;
`
const Playlist = styled.p`
    background-color: #ABABAC;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border: 1px solid #878788;
    box-shadow: 0px 4px 5px 0px rgba(50, 50, 50, 0.86);
    width:86%;
    padding-left:6%;
    padding-right:6%;
    p{
        display:flex;
        align-items:center;
    }
`
const Botao = styled.button`
  height: 40px;
  border-radius: 16px 0px 0px 16px;
`
const Deletar = styled.button`
    background-color:red;
    height: 40px;
    border-radius: 0px 16px 16px 0px;
`

class VisualizarPlaylist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listaPlaylist: []
        }
    }

    componentDidMount() {

        this.listaPlaylist()
    }

    deletarPlaylist = (idPlaylist) => {
        const deletarPlaylistPromisse = axios.delete(
            `${this.props.baseUrl}/playlists/deletePlaylist?playlistId=${idPlaylist}`,
            {
                headers: {
                    "auth": this.props.authToken
                }
            }
        )
        deletarPlaylistPromisse.then(response => {
            alert("Playlist deletada")
            this.listaPlaylist()
        })
            .catch(error => {
                console.log(error)
            })

    }
    listaPlaylist = () => {
        const listaPlaylistPromisse = axios.get(
            `${this.props.baseUrl}/playlists/getAllPlaylists`,
            {
                headers: {
                    "auth": this.props.authToken
                }
            }
        )
        listaPlaylistPromisse.then(response => {
            const lista = response.data.result.list.map((playlist, index) => {
                return (<Playlist key={playlist.id}> nome: {playlist.name} <p><Botao onClick={() => {

                    this.props.trocaTela('DetalhePlaylist', playlist.id)

                }}>Ver detalhes</Botao> <Deletar onClick={() => { this.deletarPlaylist(playlist.id) }}>DELETAR</Deletar></p> </Playlist>)
            })
            this.setState({
                listaPlaylist: lista
            })
        })
    }


    render() {


        return (
            <Main>
                <Titulo>Lista de playlists</Titulo>
                {this.state.listaPlaylist.length > 0 ? this.state.listaPlaylist : <Fragment>Carregando...</Fragment>}
            </Main>
        )
    }
}

export default VisualizarPlaylist
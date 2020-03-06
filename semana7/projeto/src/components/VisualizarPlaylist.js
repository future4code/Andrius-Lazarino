import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const Titulo = styled.h2`
    text-align:center;
`
const Deletar = styled.button`
    background-color:red;
    
`
const Playlist = styled.p`
    border: 1px dotted black;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding-left:9%;
    padding-right:9%;
    p{
        display:flex;
        align-items:center;
    }
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
                return (<Playlist key={playlist.id}> nome: {playlist.name} <p><button onClick={() => {

                    this.props.trocaTela('DetalhePlaylist', playlist.id)

                }}>Ver detalhes</button> <Deletar onClick={() => { this.deletarPlaylist(playlist.id) }}>DELETAR</Deletar></p> </Playlist>)
            })
            this.setState({
                listaPlaylist: lista
            })
        })
    }


    render() {


        return (
            <div>
                <Titulo>Lista de playlists</Titulo>
                {this.state.listaPlaylist}
            </div>
        )
    }
}

export default VisualizarPlaylist
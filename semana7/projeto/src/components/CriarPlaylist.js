import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const Main = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
`
const Titulo = styled.h2`
    text-align:center;
`

const Input = styled.input`
    width:50%;
`
const Botao = styled.button`
  height: 40px;
  margin-top: 16px;
  margin-bottom:16px;
`

class CriarPlaylist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputNomePlaylist: ''
        }
    }

    criarPlaylist = () => {

        const criarPlaylistPromisse = axios.post(
            `${this.props.baseUrl}/playlists/createPlaylist`,
            {
                "name": this.state.inputNomePlaylist
            },
            {
                headers: {
                    "auth": this.props.authToken
                }
            }

        )
        criarPlaylistPromisse.then(response => {
            alert('Playlist criada com sucesso!')
        })
            .catch(error => {
                console.log(error)
                if (error.response.data.message === 'There already is a playlist with a similiar name.') {
                    alert("Não foi possivel criar uma nova playlist, esse nome já existe!")
                }
            })

    }

    inputNomePlaylistControlado = (e) => {
        this.setState({ inputNomePlaylist: e.target.value })
    }

    componentDidMount() {


    }


    render() {



        return (
            <Main>
                <Titulo>Criação de playlist</Titulo>
                <Input type="text" value={this.state.inputNomePlaylist} onChange={this.inputNomePlaylistControlado} />
                <Botao onClick={this.criarPlaylist}>Criar Playlist</Botao>
            </Main>
        )
    }
}

export default CriarPlaylist;
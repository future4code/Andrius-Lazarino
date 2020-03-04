import React from 'react';
import styled from 'styled-components';
import axios from "axios";


const Main = styled.div`
    border: 1px solid black;
    width: 40%;
    display:flex;
    flex-direction:column;
    align-items:center;
`
const Input = styled.input`
display:block;
`

const Deletar = styled.span`
background-color: red;
`
const Lista = styled.li`
display:flex;
width:100%;
justify-content: space-around;
`


const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api"
const authToken = "andrius"

class ListaUsuario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputNome: "",
            inputEmail: "",
            usuarioLista: []
        }
    }

    componentDidMount() {
        this.listarUsuarios()
    }

    deletarUsuario = (idUsuario) => {
        if (window.confirm("Tem certeza que deseja deletar?")) {
            const apagarUsuarioPromisse = axios.delete(`${baseUrl}/users/deleteUser?id=${idUsuario}`, { headers: { 'api-token': authToken } })
            apagarUsuarioPromisse.then((response) => {
                this.listarUsuarios()
                alert("Deletado com sucesso!")
                if (this.state.usuarioLista.length === 1) {
                    this.setState({ usuarioLista: [] })
                }
            })
                .catch((error) => {
                    alert("Erro ao apagar")
                })
        }

    }


    listarUsuarios = () => {
        const dadosDoUsuario = {
            name: this.state.inputNome,
            email: this.state.inputEmail
        }

        const listaUsuariosPromisse = axios.get(
            `${baseUrl}/users/getAllUsers`,
            {
                headers: {
                    'api-token': authToken
                }
            }
        )
        listaUsuariosPromisse.then(response => {
            let usuarioLista = response.data.result
            usuarioLista = usuarioLista.map((elemento, index) => {
                return (<Lista key={elemento.id}><span onClick={()=>{this.props.mudaTelaDetalhe(elemento.id)}}>{elemento.name}</span><Deletar onClick={() => { this.deletarUsuario(elemento.id) }}>Deletar</Deletar></Lista>)
            })

            this.setState({
                usuarioLista: usuarioLista
            })
        }).catch(error => {
            console.log(error)
        })
    }

    todosUsuarios = () => {

    }

    render() {


        return (
            <Main>
                {this.state.usuarioLista.length===0 && <span>Carregando...</span>}
                {this.state.usuarioLista}
            </Main>
        );
    }
}

export default ListaUsuario;

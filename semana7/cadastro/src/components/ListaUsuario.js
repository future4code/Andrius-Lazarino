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



const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api"
const authToken = "andrius"

class ListaUsuario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputNome: "",
            inputEmail: ""
        }
    }


    inputNomeControlado = (e) => {
        this.setState({
            inputNome: e.target.value
        })
    }
    inputEmailControlado = (e) => {
        this.setState({
            inputEmail: e.target.value
        })
    }

    cadastrarUsuario = () => {
        const dadosDoUsuario = {
            name: this.state.inputNome,
            email: this.state.inputEmail
        }
        console.log(dadosDoUsuario)

        const cadastrarUsuarioPromisse = axios.post(
            `${baseUrl}/users/createUser`,
            dadosDoUsuario,
            {
                headers: {
                    'api-token': authToken
                }
            }
        )
        cadastrarUsuarioPromisse.then(response => {
            alert("Usuario criado com sucesso")
        }).catch(error => {
            console.log(error)
            alert("Erro ao criar usuário")
        })
    }

    render() {


        return (
            <Main>
                
            </Main>
        );
    }
}

export default ListaUsuario;

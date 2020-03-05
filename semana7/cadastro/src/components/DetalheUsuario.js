import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Main = styled.div`
    border: 1px solid black;
`
const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api"
const authToken = "andrius"

class DetalheUsuario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            email: '',
            usuarioLista: [],
            mostrarEditar: false,
            nomeInput: '',
            emailInput: ''
        }
    }



    componentDidMount() {
        this.detalhe()
    }
    detalhe = () => {
        const usuarioDetalhe = axios.get(
            `${baseUrl}/users/getUser/${this.props.idUsuario}`,
            {
                headers: {
                    'api-token': authToken
                }
            }
        )
        usuarioDetalhe.then(response => {
            this.setState({
                nome: response.data.result.name,
                email: response.data.result.email
            })
        }).catch(error => {
            console.log(error)
        })

    }

    deletarUsuario = () => {
        if (window.confirm("Tem certeza que deseja deletar?")) {
            const apagarUsuarioPromisse = axios.delete(`${baseUrl}/users/deleteUser?id=${this.props.idUsuario}`, { headers: { 'api-token': authToken } })
            apagarUsuarioPromisse.then((response) => {
                alert("Deletado com sucesso!")
                if (this.state.usuarioLista.length === 1) {
                    this.setState({ usuarioLista: [] })
                }
                this.props.mudaTela()
            })
                .catch((error) => {
                    alert("Erro ao apagar")
                })
        }

    }

    inputNomeControlado = (e) => {
        this.setState({
            nomeInput: e.target.value
        })
    }
    inputEmailControlado = (e) => {
        this.setState({
            emailInput: e.target.value
        })
    }

    editarUsuario = () => {
        const dadosParaTrocar = {
            user: {
                id: this.props.idUsuario,
                name: this.state.nomeInput,
                email: this.state.emailInput
            }
        }

        const editarUsuarioPromisse = axios.put(
            `${baseUrl}/users/editUser`,
            dadosParaTrocar,
            {
                headers: {
                    'api-token': authToken
                }
            }
        )
        editarUsuarioPromisse.then(response => {
            alert("Usuário editado com sucesso")
            this.setState({ 
                mostrarEditar: false,
                nome:this.state.nomeInput,
                email:this.state.email
            })
        })
            .catch(error => {
                console.log(error)
                alert("Erro ao editar usuário")
            })
    }

    telaEditarUsuario = () => {
        return (<div>
            <input type="text" onChange={this.inputNomeControlado} value={this.state.nomeInput} />
            <input type="text" onChange={this.inputEmailControlado} value={this.state.emailInput} />
            <button onClick={() => {
                this.editarUsuario()
            }}>Salvar</button>
        </div>)
    }

    render() {

        return (
            <Main>
                <h2>Detalhes</h2>
                <h3>Nome: {this.state.nome}</h3>
                <h3>E-mail: {this.state.email}</h3>
                <button onClick={this.deletarUsuario}>Deletar</button>
                {!this.state.mostrarEditar && <button onClick={() => { this.setState({ mostrarEditar: true }) }}>Editar</button>}
                {this.state.mostrarEditar && this.telaEditarUsuario()}
            </Main>
        )
    }
}
export default DetalheUsuario;
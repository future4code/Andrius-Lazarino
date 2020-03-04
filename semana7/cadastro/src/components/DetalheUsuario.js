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
            email: ''
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
            nome:response.data.result.name,
            email:response.data.result.email
        })
    }).catch(error => {
        console.log(error)
    })
    
}

render() {

    return (
        <Main>
            <h2>Detalhes</h2>
            <h3>Nome: {this.state.nome}</h3>
            <h3>E-mail: {this.state.email}</h3>
            <button>Deletar</button>
        </Main>
    )
}
}
export default DetalheUsuario;
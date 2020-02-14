import React from 'react';
//import './App.css';
import Post from './Components/Post/Post';
import styled from 'styled-components';
import { render } from '@testing-library/react';


const Aplicativo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
`
const Formulario = styled.div`

`
const Posts = styled.div`
  margin-top: 5%;
`
const InputTag = styled.input`

`
const Botao = styled.button`

`
const Topo = styled.div`
  display: flex;
  justify-content: space-between;
`

const Logo = styled.div`
  width:23%;
  display:flex;
`

const MenuLateral = styled.div`
  
  height: 50px;

`
const Menu1 = styled.img`
  height: 50px;
 


`
const Menu2 = styled.img`
  height: 50px;
  width: 50px;

`

const Menu3 = styled.img`
  height: 50px;
width: 50px;

`
const ImagemLogo = styled.img`
height: 50px;



`

const Header = styled.div`
margin-top:1%;
height: 20%;
`

const LogoTexto = styled.h1`
margin: 0;
padding: 0;
`

const Pesquisar = styled.input`
width: 46%;
::placeholder{
  text-align: center;
}

`

const Linha = styled.div`
width:100%;
height: 1px;
border-top: 1px solid grey;
margin-bottom: 1%;
margin-top: 1%;
`



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: "",
      fotoPerfil: "",
      fotoPost: "",
      listaDePosts: [],
      listaDeComponentes: []
    }
  }




  Postar = () => {

    let listaAuxiliar = { nome: this.state.nome, fotoPerfil: this.state.fotoPerfil, fotoPost: this.state.fotoPost }

    let listaCompletaDados = this.state.listaDePosts
    listaCompletaDados.push(listaAuxiliar)
    console.log(listaCompletaDados)

    const listaCompleta = listaCompletaDados.map((elemento, index) => {
      return (<Post key={index} nome={elemento.nome} imagem={elemento.fotoPost} imagemUsuario={elemento.fotoPerfil} />)
    })

    this.setState({
      listaDeComponentes: listaCompleta
    })
  }






  aoMudarOInputNome = (e) => {
    const inputDoUsuario = e.target.value
    this.setState({
      nome: inputDoUsuario
    })
  }

  aoMudarOInputFotoPerfil = (e) => {
    const inputDoUsuario = e.target.value
    this.setState({
      fotoPerfil: inputDoUsuario
    })
  }

  aoMudarOInputFotoPost = (e) => {
    const inputDoUsuario = e.target.value
    this.setState({
      fotoPost: inputDoUsuario
    })
  }

  render() {
    return (
      <Aplicativo>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
        <Header>
          <Topo>
            <Logo>
              <ImagemLogo src={require("./img/logo.svg")} alt="Não achado" />
              <LogoTexto> | Feed</LogoTexto>
            </Logo>
              <Pesquisar placeholder="Pesquise" />
            <MenuLateral>
              <Menu1 src={require("./img/compass.svg")} />
              <Menu2 src={require("./img/favorite-white.svg")} />
              <Menu3 src={require("./img/minhaconta.svg")} />
            </MenuLateral>
          </Topo>
          <Linha />
          <Formulario>
            <InputTag type="text" placeholder="Seu nome" onChange={this.aoMudarOInputNome} value={this.state.nome} />
            <InputTag type="text" placeholder="Foto perfil" onChange={this.aoMudarOInputFotoPerfil} value={this.state.fotoPerfil} />
            <InputTag type="text" placeholder="Foto post" onChange={this.aoMudarOInputFotoPost} value={this.state.fotoPost} />
            <Botao onClick={this.Postar}>Criar Post</Botao>
          </Formulario>

        </Header>
        <Posts>
          {this.state.listaDeComponentes}
        </Posts>

      </Aplicativo>
    )
  }
}

export default App;

import React from 'react';
import './App.css';
import Post from './Components/Post/Post';
import styled from 'styled-components';
import { render } from '@testing-library/react';

const Formulario = styled.div`
  border: solid 1px black;
`

const Posts = styled.div`
  border: solid 1px black;
  margin-top: 5%;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: "",
      fotoPerfil: "",
      fotoPost: "",
      listaDePosts: [],
      listaDeComponentes:[]
    }
  }

  Postar = () => {

    let listaAuxiliar = {nome: this.state.nome, fotoPerfil: this.state.fotoPerfil, fotoPost: this.state.fotoPost}

    let listaCompletaDados = this.state.listaDePosts
    listaCompletaDados.push(listaAuxiliar)
    console.log(listaCompletaDados)

    const listaCompleta = listaCompletaDados.map((elemento,index)=>{
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
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
        <header>
          <div>
            <div className="logo">
              <img src={require("./img/logo.svg")} alt="Não achado" />
              <h1>Feed</h1>
            </div>
            <div className="pesquisa">
              <input />
            </div>
            <div className="minhaConta">
              <img src={require("./img/compass.svg")} />
              <img src={require("./img/favorite-white.svg")} />
              <img src={require("./img/minhaconta.svg")} />
            </div>
          </div>
          <hr />

          <Formulario>
            <input type="text" onChange={this.aoMudarOInputNome} value={this.state.nome} />
            <input type="text" onChange={this.aoMudarOInputFotoPerfil} value={this.state.fotoPerfil} />
            <input type="text" onChange={this.aoMudarOInputFotoPost} value={this.state.fotoPost} />
            <button onClick={this.Postar}>Criar Post</button>
          </Formulario>

        </header>

        {/* <Post nome="Andrius" imagem={require('./img/imagem1.jpg')} imagemUsuario={require('./img/perfil.jpg')} /> */}

        <Posts>
          {this.state.listaDeComponentes}
        </Posts>

      </div>
    )
  }
}

export default App;

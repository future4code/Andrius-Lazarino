import React from 'react';
import './App.css';
import Post from './Components/Post/Post';

function App() {
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
            <input placeHolder="Pesquisar" />
          </div>
          <div className="minhaConta">
            <img src={require("./img/compass.svg")} />
            <img src={require("./img/favorite-white.svg")} />
            <img src={require("./img/minhaconta.svg")} />
          </div>
        </div>
        <hr />
      </header>
      <Post nome="Andrius" imagem={require('./img/imagem1.jpg')} imagemUsuario={require('./img/perfil.jpg')} />
      <Post nome="Andrius" imagem={require('./img/imagem2.jpeg')} imagemUsuario={require('./img/perfil.jpg')} />
      <Post nome="Andrius" imagem={require('./img/imagem3.jpg')} imagemUsuario={require('./img/perfil.jpg')} />
    </div>
  );
}

export default App;

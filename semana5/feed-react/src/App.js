import React from 'react';
import './App.css';
import Post from './Components/Post/Post';

function App() {
  return (
    <div className="App">
      <header>
        Teste
      </header>
      <Post nome="Andrius" imagem={require('./img/imagem1.jpg')} imagemUsuario={require('./img/perfil.jpg')} />
      <Post nome="Andrius" imagem={require('./img/imagem2.jpeg')} imagemUsuario={require('./img/perfil.jpg')} />
      <Post nome="Andrius" imagem={require('./img/imagem3.jpg')} imagemUsuario={require('./img/perfil.jpg')} />
    </div>
  );
}

export default App;

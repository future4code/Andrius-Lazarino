import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={require("./img/lista.jpg")}></img>
        <h1>FutureTube</h1>
        <h2>Recomendados</h2>
        <input type="text" id="textobusca" value="Pesquisar"></input>
        <button><img src={require("./img/pesquisa.jpg")}></img></button>
        
      </header>
      <main>
        <nav id="menu">
            <div><a href="index.html"><img src={require("./img/inicio.jpg")}></img>Inicio</a></div>
            <div><a href="#"><img src={require("./img/emalta.jpg")}></img>Em alta</a></div>
            <div><a href="#"><img src={require("./img/inscricoes.jpg")}></img>Inscrições</a></div>
            <div><a href="#"><img src={require("./img/biblioteca.jpg")}></img>Biblioteca</a></div>
            <div><a href="#"><img src={require("./img/historico.jpg")}></img>Histórico</a></div>
            <div><a href="#"><img src={require("./img/salvos.jpg")}></img>Salvos</a></div>
            <div><a href="#">INSCRIÇÕES</a></div>
        </nav>
        <div id="videos">
          <a href="#">
            <div className="blocos">
              <img src={require("./img/media1.jpg")}></img>
              <p><div className="autor"></div>Media 1</p>
            </div>
          </a>
          <a href="#">
            <div className="blocos">
              <img src={require("./img/media2.jpg")}></img>
              <p><div className="autor"></div>Media 2</p>
            </div>
          </a>
          <a href="media4.html">
            <div class="blocos">
              <img src={require("./img/media3.jpg")}></img>
              <p><div className="autor"></div>Media 3</p>
            </div>
          </a>
          <a href="media4.html">
            <div class="blocos">
              <img src={require("./img/media4.jpg")}></img>
              <p><div className="autor"></div>Media 4</p>
            </div>
          </a>
          <a href="media5.html">
            <div class="blocos">
              <img src={require("./img/media5.jpg")}></img>
              <p><div className="autor"></div>Media 5</p>
            </div>
          </a>
          <a href="media6.html">
            <div class="blocos">
              <img src={require("./img/media6.jpg")}></img>
              <p><div className="autor"></div>Media 6</p>
            </div>
          </a>
          <a href="media7.html">
            <div class="blocos">
              <img src={require("./img/media7.jpg")}></img>
              <p><div className="autor"></div>Media 7</p>
            </div>
          </a>
          <a href="media8.html">
            <div class="blocos">
              <img src={require("./img/media8.jpg")}></img>
              <p><div className="autor"></div>Media 8</p>
            </div>
          </a>
        </div>

      </main>
      <footer>
        <p>2020 - futuretube.ff4</p>
      </footer>
    </div>
  );
}

export default App;

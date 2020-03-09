import React from 'react';
import styled from 'styled-components'
import CriarPlaylist from './components/CriarPlaylist';
import VisualizarPlaylist from './components/VisualizarPlaylist';
import DetalhePlaylist from './components/DetalhePlaylist';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  height:100vh;
  background-color: #CCCDCE;
`
const Tela = styled.div`
  border: 1px solid #878788;
  width: 50%;
  background-color:#B9BBBC;
  border-radius: 0px 0px 4% 4%;
`
const Botao = styled.button`
  height: 40px;
`

const baseUrl = 'https://us-central1-spotif4.cloudfunctions.net/api';
const authToken = 'andrius';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      telaAtual: "VisualizarPlaylist",
      idPlaylist: undefined
    }
  }


  trocaTela = (telaAtual)=>{
    switch(telaAtual){
      case "CriarPlaylist":
        return (<CriarPlaylist baseUrl={baseUrl} authToken={authToken} />)
      case "VisualizarPlaylist":
        return (<VisualizarPlaylist baseUrl={baseUrl} authToken={authToken} trocaTela={(telaAtual, idPlaylist)=>{this.setState({telaAtual: telaAtual, idPlaylist: idPlaylist})}} />)
      case "DetalhePlaylist":
        return (<DetalhePlaylist baseUrl={baseUrl} authToken={authToken} idPlaylist={this.state.idPlaylist} />)
      default:
        return (<span>Tela não encontrada</span>)
    }
  }
  render() {
    return (
      <Main>
        <nav>
          <Botao onClick={()=>{
            this.setState({
              telaAtual: "CriarPlaylist"
            })
          }}>Criar Playlist</Botao>

          <Botao onClick={()=>{
            this.setState({
              telaAtual: "VisualizarPlaylist"
            })
          }}>Visualizar Playlists</Botao>
        </nav>
        
        <Tela>
        {this.trocaTela(this.state.telaAtual)}
        </Tela>
      </Main>
    )
  }
}

export default App;

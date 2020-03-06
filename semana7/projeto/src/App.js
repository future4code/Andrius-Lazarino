import React, { Fragment } from 'react';
import styled from 'styled-components'
import CriarPlaylist from './components/CriarPlaylist';
import VisualizarPlaylist from './components/VisualizarPlaylist';
import DetalhePlaylist from './components/DetalhePlaylist';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
`
const Tela = styled.div`
  border: 1px solid black;
  width: 50%;
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
        return (<Fragment> <CriarPlaylist baseUrl={baseUrl} authToken={authToken} /> </Fragment>)
      case "VisualizarPlaylist":
        return (<Fragment> <VisualizarPlaylist baseUrl={baseUrl} authToken={authToken} trocaTela={(telaAtual, idPlaylist)=>{this.setState({telaAtual: telaAtual, idPlaylist: idPlaylist})}} /> </Fragment>)
      case "DetalhePlaylist":
        return (<Fragment> <DetalhePlaylist baseUrl={baseUrl} authToken={authToken} idPlaylist={this.state.idPlaylist} /> </Fragment>)
      default:
        return (<Fragment> <span>Tela não encontrada</span> </Fragment>)
    }
  }
  render() {
    return (
      <Main>

        <nav>
          <button onClick={()=>{
            this.setState({
              telaAtual: "CriarPlaylist"
            })
          }}>Criar Playlist</button>

          <button onClick={()=>{
            this.setState({
              telaAtual: "VisualizarPlaylist"
            })
          }}>Visualizar Playlists</button>
        </nav>
        
        <Tela>
        {this.trocaTela(this.state.telaAtual)}
        </Tela>
      </Main>
    )
  }
}

export default App;

import React, { Fragment } from 'react';
import styled from 'styled-components';
import Cadastro from './components/Cadastro';
import ListaUsuario from './components/ListaUsuario';
import DetalheUsuario from './components/DetalheUsuario';


const Aplicativo = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;

`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tela: 'cadastro',
      idUsuarioDetalhe: 0
    }
  }

  telaAtual = () => {
    if (this.state.tela === 'cadastro') {
      return <Cadastro />
    }
    else if (this.state.tela === 'lista') {
      return (<ListaUsuario mudaTelaDetalhe={this.mudaTelaDetalhe} />)
    }
    else {
      return (<DetalheUsuario idUsuario={this.state.idUsuarioDetalhe} mudaTela={this.mudaTela} />)
    }
  }

  mudaTela = () => {
    if (this.state.tela === 'cadastro') {
      this.setState({ tela: 'lista' })
    }
    else if (this.state.tela === 'lista') {
      this.setState({ tela: 'cadastro' })
    }
    else {
      this.setState({ tela: 'lista' })
    }
  }

  mudaTelaDetalhe = (idUsuario) => {
    this.setState({
      tela: 'detalhe',
      idUsuarioDetalhe: idUsuario
    })
  }

  // voltaDepoisDeDeletar = ()=.{
  //   this.setState({
  //     tela:'lista'
  //   })
  // }


  mudaNomeTela = () => {
    switch (this.state.tela) {
      case 'cadastro':
        return (<Fragment>Ir para página de lista</Fragment>)
        
      case 'lista':
        return (<Fragment>Ir para página de registro</Fragment>)
       
      default:
        return (<Fragment>Voltar</Fragment>)
        
    }
  }
  render() {


    return (
      <Aplicativo>
        <button onClick={this.mudaTela} >{
          this.mudaNomeTela()
        }</button>

        {this.telaAtual()}

      </Aplicativo>
    );
  }
}

export default App;

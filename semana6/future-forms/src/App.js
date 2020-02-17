import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Main = styled.div`
`

const Inicio = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;
`

const Botao = styled.button`
display:block;
margin-top:10%;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      etapaAtual: 1,
      etapa: 1
    }
  }





  render() {
    const etapa1 = (
      <Inicio>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <p>1. Qual o seu nome?</p>
        <input />
        <p>2. Qual o sua idade?</p>
        <input />
        <p>3. Qual o seu email?</p>
        <input />
        <p>4. Qual a sua escolaridade?</p>
        <select>
          <option>Ensino Médio Incompleto</option>
          <option>Ensino Médio Completo</option>
          <option>Ensino Superior Incompleto</option>
          <option>Ensino Superior Completo</option>
        </select>
        <Botao onClick={() => {
          this.setState({
            etapaAtual: this.state.etapaAtual + 1,
          })
        }}>Próxima etapa</Botao>
      </Inicio>
    )
    const etapa2 = (
      <Inicio>
        <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
        <p>5. Qual curso?</p>
        <input />
        <p>6. Qual a unidade de ensino?</p>
        <input />
        <Botao onClick={() => {
          this.setState({
            etapaAtual: this.state.etapaAtual + 1,
            etapa1: true
          })
        }}>Próxima etapa</Botao>
      </Inicio>
    )
    const etapa3 = (
      <Inicio>
        <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        <p>7. Por que você não terminou um curso de graduação?</p>
        <input />
        <p>8. Você fez algum curso complementar?</p>
        <select>
          <option>Nenhum</option>
          <option>Curso técnico</option>
          <option>Curso de inglês</option>
        </select>
        <Botao onClick={() => {
          this.setState({
            etapaAtual: this.state.etapaAtual + 1,
            etapa1: true
          })
        }}>Próxima etapa</Botao>
      </Inicio>
    )
    const final = (
      <Inicio>
        <h3>O FORMULÁRIO ACABOU</h3>
        <p>Muito obrigado por participar! Entraremos em contato!</p>
      </Inicio>
    )
    switch (this.state.etapaAtual) {
      case 1:
        this.state.etapa = etapa1
        break;
      case 2:
        this.state.etapa = etapa2
        break;
      case 3:
        this.state.etapa = etapa3
        break;
      default:
        this.state.etapa = final
        break;
    }
    return (
      <Main>
        {this.state.etapa}
      </Main>
    )
  }
}

export default App;

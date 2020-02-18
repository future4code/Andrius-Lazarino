import React, { Component } from 'react';
import styled from 'styled-components'
import Tarefa from './Components/Tarefa';



const Aplicativo = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
const Topo = styled.div`
width:50%;
display:flex;
flex-direction:column;
align-items:center;
`
const Input = styled.input`
display:inline;
`
const Botao = styled.button`

`
const P = styled.p`
display:inline;
`
const Select = styled.select`
display:inline;
`
const Hr = styled.hr`
width:100%;
`
const Filtro = styled.div`

`

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputNome: "",
      selectFiltro: "Nenhum",

      listaDeTarefas: []
    }
  }

  inputNomeControlado = (event)=>{
    this.setState({
      inputNome: event.target.value
    })
  }
  selectFiltroControlado = (event)=>{
    this.setState({
      selectFiltro: event.target.value
    })
  }
  adicionarTarefa=()=>{
    const listaAuxiliarDados = {
      nomeTarefa: this.state.inputNome
    }

    const copiaListaDeTarefas = this.state.listaDeTarefas
    copiaListaDeTarefas.push(listaAuxiliarDados)

    const listaDeTarefas = copiaListaDeTarefas.map((elemento, index) => {
      return (<Tarefa key={index} nomeTarefa={elemento.nomeTarefa} />)
    })
    this.setState({
      listaDeTarefas: copiaListaDeTarefas,
      listaDeTarefasComponente: listaDeTarefas
    })
  }

  render() {
    return (
      <Aplicativo>
        <Topo>
          <div>
          <h2>Lista de Tarefas</h2>
          <Input value={this.state.inputNome} onChange={this.inputNomeControlado} />
          <Botao onClick={this.adicionarTarefa}>Adicionar</Botao>
          </div>
          <div>
          <P>Filtro</P>
          <Select value={this.state.selectFiltro} onChange={this.selectFiltroControlado} >
            <option>Nenhum</option>
            <option>Pendentes</option>
            <option>Completas</option>
          </Select>
          </div>
        </Topo>
        <Hr />
        <Filtro>
          {this.state.listaDeTarefasComponente}
        </Filtro>
      </Aplicativo>
    )
  }
}

export default App;

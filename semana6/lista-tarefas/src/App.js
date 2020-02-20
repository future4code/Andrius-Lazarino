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

      listaDeTarefas: [{nomeTarefa: "a", pendencia: false},{nomeTarefa: "b", pendencia: false},{nomeTarefa: "c", pendencia: true}],
      listaDeTarefasComponente: [],
      listaFiltrada: []
    }
  }

  inputNomeControlado = (event) => {
    this.setState({
      inputNome: event.target.value
    })
  }
  selectFiltroControlado = (event) => {
    this.setState({
      selectFiltro: event.target.value
    })
    this.filtrarTarefa(event.target.value)
  }
  adicionarTarefa = () => {
    const listaAuxiliarDados = {
      nomeTarefa: this.state.inputNome,
      pendencia: false
    }

    const copiaListaDeTarefas = this.state.listaDeTarefas
    copiaListaDeTarefas.push(listaAuxiliarDados)
    const listaDeTarefas = copiaListaDeTarefas.map((elemento, index, array) => {
      return (<Tarefa key={index} pendenciaState={elemento.pendencia} pendencia={(pendencia) => {
        this.atualizaPendencia(index, pendencia)
      }} nomeTarefa={elemento.nomeTarefa} />)
    })
    this.setState({
      listaDeTarefas: copiaListaDeTarefas,
      listaDeTarefasComponente: listaDeTarefas
    })
  }

  atualizaPendencia = (index, pendencia) => {
    const copiaListaDeTarefas = this.state.listaDeTarefas
    copiaListaDeTarefas[index].pendencia = pendencia
    this.setState({
      listaDeTarefas: copiaListaDeTarefas
    })
    this.filtrarTarefa(this.state.selectFiltro)
  }

  filtrarTarefa = (pendencia) => {
    let listaFiltrada
    if (pendencia === "Nenhum") {
      listaFiltrada = this.state.listaDeTarefas
    }
    else if (pendencia === "Completas") {
      listaFiltrada = this.state.listaDeTarefas.filter((elemento, index, array) => {
        if (elemento.pendencia === true) {
          return true
        }
        return false
      })
    }
    else {
      listaFiltrada = this.state.listaDeTarefas.filter((elemento, index, array) => {
        if (elemento.pendencia === false) {
          return true
        }
        return false
      })
    }
    console.log(listaFiltrada)
    const listaDeTarefas = listaFiltrada.map((elemento, index) => {
      return (<Tarefa key={index} pendenciaState={elemento.pendencia} pendencia={(pendencia) => {
        this.atualizaPendencia(index, pendencia)
      }} nomeTarefa={elemento.nomeTarefa} />)
    })

    this.setState({
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
              <option >Pendentes</option>
              <option >Completas</option>
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

import React from 'react';
import styled from 'styled-components';
import Cadastro from './components/Cadastro';
import ListaUsuario from './components/ListaUsuario';


const Aplicativo = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;

`

class App extends React.Component {
  constructor(props){
    super(props)
  }
  

  render(){


    return (
      <Aplicativo>
        <button>Ir para página de lista</button>
        <Cadastro />
        <hr />
        <ListaUsuario />
      </Aplicativo>
    );
  }
}

export default App;

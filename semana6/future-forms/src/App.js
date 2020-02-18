import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Etapa from './Components/Etapa';

const Main = styled.div`
`



class App extends React.Component {
  constructor(props) {
    super(props)

  }







  render(){
    

    return (
      <Main>
        <Etapa />
      </Main>
    )
  }
}

export default App;

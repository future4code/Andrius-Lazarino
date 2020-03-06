import React from 'react';
import Tempo from './components/Tempo';
import styled from 'styled-components';

const Main = styled.div`
  display:flex;
  justify-content:center;
`

class App extends React.Component {



  render() {




    return (
      <Main>
        <Tempo />
      </Main>
    );

  }
}

export default App;

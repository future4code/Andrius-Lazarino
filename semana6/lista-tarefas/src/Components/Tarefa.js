import React from 'react';
import styled from 'styled-components'

const Main = styled.div`
text-decoration:none;
`

class Tarefa extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            estaPendente: false,
            EstaPendenteDecoration: "none"
        }
    }

    riscaTarefa = ()=>{
        let decoracao
        if(this.state.estaPendente){
            decoracao="none"
        }else{
            decoracao="line-through"

        }
        this.setState({
            estaPendente: !this.state.estaPendente,
            EstaPendenteDecoration: decoracao
        })
    }
    
    render(){
        return(
        <Main onClick={this.riscaTarefa}>{this.props.nomeTarefa}</Main>
        )
    }

}

export default Tarefa

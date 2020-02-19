import React from 'react';
import styled from 'styled-components'

const Main = styled.div`
text-decoration: ${props=>props.riscar};
`

class Tarefa extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            estaPendente: this.props.pendenciaState,
            EstaPendenteDecoration: "none"
        }
    }

    riscaTarefa = (props)=>{
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
        console.log(this.state.estaPendente)
        // let decoracao
        // if(this.state.estaPendente){
        //     decoracao="none"
        // }else{
        //     decoracao="line-through"

        // }
        // this.setState({
        //     EstaPendenteDecoration: decoracao
        // })

        return(
        <Main onClick={()=>{
            this.riscaTarefa()
            const pendencia = !this.state.estaPendente
            this.props.pendencia(pendencia)
        }} riscar={this.state.EstaPendenteDecoration}>{this.props.nomeTarefa}</Main>
        )
    }

}

export default Tarefa

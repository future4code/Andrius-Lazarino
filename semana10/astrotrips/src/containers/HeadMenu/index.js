import React from "react"
import styled from "styled-components"

import { connect } from "react-redux"
import { push } from 'connected-react-router';
import { routes } from '../Router';

const Top = styled.div`
  background-color: #c6c6c6;
  display: flex;
  justify-content: flex-end;
  padding-right: 10%;
  width: 80%;
  height: 40px;
`

const Logo = styled.img`
`

class HeadMenu extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {

        return (
            <Top>
                <Logo src={require("../../img/logo.png")} />
                <button onClick={this.props.goToLogin}>Login</button>
                <button onClick={this.props.goToCreateTrip}>Criar Viagem</button>
                <button onClick={this.props.goToListTrips}>Listar viagens</button>
                <button onClick={this.props.goToCandidateTrip}>Candidatar-se a viagem</button>
            </Top>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    goToLogin: () => dispatch(push(routes.login)),
    goToCreateTrip: () => dispatch(push(routes.createTrip)),
    goToListTrips: () => dispatch(push(routes.listTrips)),
    goToCandidateTrip: () => dispatch(push(routes.applicationForm))
})

export default connect(null, mapDispatchToProps)(HeadMenu)
import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router"
import { routes } from "../Router"
import { fetchTrips, setId } from "../../actions"
import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'


const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const PaperStyled = styled(Paper)`
    display: flex;
`
const token = window.localStorage.getItem("token")
class listTripsPage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if (token === null) {
            this.props.goToLogin()
        } 
        else{
            this.props.fetchTrips()
        }
    }

    render() {
        console.log(this.props.listTrips)
        return (
            <ListWrapper>
                {this.props.listTrips.map((trip,index) => {
                    return (
                        <PaperStyled key={index}>
                            <div>
                                <p>{trip.planet}</p>
                                <p>{trip.date}</p>
                                <p>{trip.durationInDays}</p>
                            </div>
                            <div>
                                <h3>{trip.name}</h3>
                                <p>{trip.description}</p>
                                <button onClick={()=>{
                                    this.props.setId(trip.id)
                                    this.props.goToDetails()
                                    }}>Detalhes</button>
                            </div>
                        </PaperStyled>
                    )
                })}
            </ListWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        listTrips: state.trips.listTrips
    }
}

const mapDiapatchToProps = (dispatch) => ({
    goToLogin: () => dispatch(push(routes.login)),
    fetchTrips: () => dispatch(fetchTrips()),
    setId: (id) => dispatch(setId(id)),
    goToDetails: () => dispatch(push(routes.tripDetails))
})

export default connect(mapStateToProps, mapDiapatchToProps)(listTripsPage);
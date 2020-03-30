import React from "react"
import { connect } from "react-redux"
import { fetchDetails, setApproved } from "../../actions"

const token = window.localStorage.getItem("token")

class TripDetailsPage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(id) {
        if (token === null) {
            this.props.goToLogin()
        } else {
            this.props.fetchDetails(this.props.id, token)

        }
    }

    listDetails = () => {
        if (this.props.detailTrip !== undefined) {
            const { planet, date, durationInDays, name, description, candidates, approved } = this.props.detailTrip
            return (
                <div>
                    <div>
                        <div>
                            <p>{planet}</p>
                            <p>{date}</p>
                            <p>{durationInDays} dias</p>
                        </div>
                        <div>
                            <h3>{name}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                    <div>
                        <h3>Inscrições</h3>
                        <h4>Aprovados</h4>
                        {
                            approved.map((candidate, index) => {
                                return (
                                    <div key={index}>
                                        <p>Nome: {candidate.name} Idade: {candidate.age} País: {candidate.country}</p>
                                        <p>Profissão: {candidate.profession}</p>
                                        <p>Descrição: {candidate.applicationText}</p>
                                    </div>
                                )
                            })
                        }
                        <h4>Candidatos</h4>
                        {
                            candidates.map((candidate, index) => {
                                return (
                                    <div key={index}>
                                        <p>Nome: {candidate.name} Idade: {candidate.age} País: {candidate.country}</p>
                                        <p>Profissão: {candidate.profession}</p>
                                        <p>Descrição: {candidate.applicationText}</p>
                                        <button onClick={()=>{
                                            this.props.setApproved(this.props.detailTrip.id,candidate.id, true, token)
                                        }}>Aprovar</button>
                                        <button onClick={()=>{
                                            this.props.setApproved(this.props.detailTrip.id,candidate.id, false, token)
                                        }}>Rejeitar</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.listDetails()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        id: state.trips.id,
        detailTrip: state.trips.detailTrip
    }
}

const mapDispatchToProps = dispatch => ({
    fetchDetails: (id, token) => dispatch(fetchDetails(id, token)),
    setApproved: (idTrip,idCandidade, approved, token) => dispatch(setApproved(idTrip,idCandidade, approved, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(TripDetailsPage);
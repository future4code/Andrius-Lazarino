import React from "react"
import { connect } from "react-redux"
import { fetchDetails } from "../../actions"

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
        console.log(this.props.detailTrip)
        // console.log("testando")
        if (this.props.detailTrip !== undefined) {
            const { planet, date, durationInDays, name, description, candidates } = this.props.detailTrip
            return (
                <div>
                    <div>
                        <div>
                            <p>{planet}</p>
                            <p>{date}</p>
                            <p>{durationInDays}</p>
                        </div>
                        <div>
                            <h3>{name}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                    <div>
                        <h3>Inscrições</h3>
                        {
                            candidates.map((candidate, index) => {
                                return (
                                    <div key={index}>
                                        <p>Nome: {candidate.name} Idade: {candidate.age} País: {candidate.country}</p>
                                        <p>Profissão: {candidate.profession}</p>
                                        <p>Descrição: {candidate.applicationText}</p>
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
        // console.log(this.props.detailTrip)
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
    fetchDetails: (id, token) => dispatch(fetchDetails(id, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(TripDetailsPage);
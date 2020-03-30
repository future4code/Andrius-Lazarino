import React from "react"
import { connect } from "react-redux"
import { fetchTrips, candidateTrip } from "../../actions"


const tripForm = [
    {
        name: "name",
        label: "Nome do passageiro",
        type: "text",
        required: true,
        pattern: "[a-zA-Z]{3,}",
        title: "Nome completo do passageiro deve ter no minimo 3 letras."
    },
    {
        name: "age",
        label: "Idade do passageiro",
        type: "text",
        required: true,
        //ADICIONAR PATTERN
        title: "Idade"
    },
    {
        name: "planet",
        label: "Viagem",
        type: "select",
        required: true,
    },
    {
        name: "text",
        label: "Texto do passageiro",
        type: "text",
        required: true,
        //ADICIONAR PATTERN
        title: "Texto do passageiro"
    },
    {
        name: "profession",
        label: "Profissão do passageiro",
        type: "text",
        required: true,
        //ADICIONAR PATTERN
        title: "Profissão do passageiro"
    },
    {
        name: "country",
        label: "País de origem do passageiro",
        type: "text",
        required: true,
        //ADICIONAR PATTERN
        tittle: "País de origem do passageiro"
    }
]


class ApplicationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {}
        }
    }

    componentDidMount() {
        this.props.fetchTrips()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({
            form: {
                ...this.state.form,
                [name]: value
            }
        })
    }

    handleCandidate = (e) => {
        e.preventDefault()
        const candidateData = this.state.form
        this.props.candidateTrip(candidateData)
    }

    render() {
        return (
            <div>
                Formulario de inscrição
                <form onSubmit={this.handleCandidate}>
                    {tripForm.map(input => {
                        if (input.type === "text") {
                            return (
                                <div key={input.name}>
                                    <label htmlFor={input.name}>{input.label}: </label>
                                    <input
                                        id={input.name}
                                        name={input.name}
                                        type={input.type}
                                        value={this.state.form[input.name] || ""}
                                        required={input.required}
                                        onChange={this.handleInputChange}
                                        pathern={input.pattern}
                                    />
                                </div>
                            )
                        }
                        else {
                            return (
                                <div key={input.name}>
                                    <label>{input.name}</label>
                                    <select
                                        name={input.name}
                                        type={input.type}
                                        required={input.required}
                                        onChange={this.handleInputChange}
                                        value={this.state.form[input.name] || ""}
                                    >
                                        <option value={false}>Selecione uma viagem</option>
                                        {this.props.listTrips.map(trip => {
                                            return (<option key={trip.id} value={trip.id}>{trip.name}</option>)
                                        })}
                                    </select>
                                </div>
                            )
                        }
                    })}
                    <button type="submit">Inscrever-se</button>
                </form>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listTrips: state.trips.listTrips
    }
}

const mapDispatchToProps = dispatch => ({
    fetchTrips: () => dispatch(fetchTrips()),
    candidateTrip: (candidateData) => dispatch(candidateTrip(candidateData))
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm);
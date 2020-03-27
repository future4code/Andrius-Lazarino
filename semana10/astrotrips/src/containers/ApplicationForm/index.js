import React from "react"
import { connect } from "react-redux"
import { fetchTrips } from "../../actions"


const tripForm = [
    {
        name: "nome",
        label: "Nome do passageiro",
        type: "text",
        required: true,
        pattern: "[a-zA-Z]{3,}",
        title: "Nome completo do passageiro deve ter no minimo 3 letras."
    },
    {
        name: "idade",
        label: "Idade do passageiro",
        type: "text",
        required: true,
        //ADICIONAR PATTERN
        title: "Idade"
    },
    {
        name: "planeta",
        label: "Planeta de destino",
        type: "select",
        required: true,
    },
    {
        name: "texto",
        label: "Texto do passageiro",
        type: "text",
        required: true,
        //ADICIONAR PATTERN
        title: "Texto do passageiro"
    },
    {
        name: "Profissao",
        label: "Profissão do passageiro",
        type: "text",
        required: true,
        //ADICIONAR PATTERN
        title: "Profissão do passageiro"
    }
]


class ApplicationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {}
        }
    }

    componentDidMount(){
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

    render() {
        console.log(this.props.listTrips)
        return (
            <div>
                Formulario de inscrição
                <form>
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
                                        {this.props.listTrips.map(trip=>{
                                            return (<option key={trip.id} value={trip.id}>{trip.name}</option>)
                                        })}
                                    </select>
                                </div>
                            )
                        }
                    })}
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
    fetchTrips: () => dispatch(fetchTrips())
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm);
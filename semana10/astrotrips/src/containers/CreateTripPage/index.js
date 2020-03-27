import React from "react"
import { connect } from "react-redux"
import { createTrip } from "../../actions"

const tripForm = [
    {
        name: "name",
        label: "Nome da viagem",
        type: "text",
        required: true,
        pattern: "[a-zA-Z]53,}",
        title: "Nome da viagem deve ter no minimo 5 letras"
    },
    {
        name: "planet",
        label: "Planeta de destino",
        type: "select",
        options: ['Mercurio', 'Venus', 'Terra', 'Marte', 'Jupiter', 'Saturno', 'Urano', 'Netuno'],
        required: true,
        title: "Selecione um planeta"
    },
    {
        name: "date",
        label: "data da viagem",
        type: "text",
        required: true,
        //ADICIONAR PATTERN
        title: "A data deve estar no futuro"
    },
    {
        name: "description",
        label: "Descricao da viagem",
        type: "text",
        required: true,
        //ADICIONAR PATTERN
        title: "A descrição da viagem deve ter no minimo 30 letras"
    },
    {
        name: "duration",
        label: "Duracao da viagem",
        type: "text",
        required: true,
        //ADICIONAR PATTERN
        title: "A duração da viagem deve ser de no minimo 50 dias"
    }
]

const token = window.localStorage.getItem("token")

class CreateTripPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {}
        }
    }

    componentDidMount() {
        if (token === null) {
            this.props.goToLogin()
        } else {

        }
    }

    handleInputChange = e => {
        const { name, value } = e.target
        console.log(name)
        console.log(value)
        this.setState({
            form: {
                ...this.state.form,
                [name]: value
            }
        })
    }

    render() {
        return (
            <div>
                {tripForm.map((input, index) => {
                    if (input.type === "text") {
                        return (
                            <div key={index}>
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
                            <div key={index}>
                                <label>{input.name}</label>
                                <div>
                                    <select
                                        name={input.name}
                                        type={input.type}
                                        required={input.required}
                                        onChange={this.handleInputChange}
                                        value={this.state.form[input.name] || ""}
                                    >
                                        {input.options.map((option) => {
                                            return (<option key={option} value={option}>{option}</option>)
                                        })}
                                    </select>
                                </div>
                            </div>
                        )
                    }
                })}
                <button onClick={() => {
                    const tripData = this.state
                    console.log(tripData)
                    this.props.createTrip(tripData)
                }}>Criar viagem</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    createTrip: () => dispatch(createTrip())
})

export default connect(null, mapDispatchToProps)(CreateTripPage);
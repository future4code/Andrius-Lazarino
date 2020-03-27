import React from "react"


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
        label:"Texto do passageiro",
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
                                    name={FileReader.name}
                                    type={FileReader.type}
                                    required={FileReader.required}
                                    onChange={this.handleInputChange}
                                    value={this.state.form[input.name] || ""}
                                    >
                                        <option value="1">Testando1</option>
                                        <option value="2">Testando2</option>
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



export default ApplicationForm;
import React from "react"

const tripForm = [
    {
        name: "nome",
        label: "Nome da viagem",
        type: "text",
        required: true,
        pattern: "[a-zA-Z]53,}",
        title: "Nome da viagem deve ter no minimo 5 letras"
    },
    {
        name: "planeta",
        label: "Planeta de destino",
        type: "select",
        required: true,
    },
    {
        name: "data",
        label:"data da viagem",
        type: "text",
        required: true,
        //ADICIONAR PATTERN
        title: "A data deve estar no futuro"
    },
    {
        name: "descricao",
        label: "Descricao da viagem",
        type: "text",
        required: true,
        //ADICIONAR PATTERN
        title: "A descrição da viagem deve ter no minimo 30 letras"
    },
    {
        name: "duracao",
        label: "Duracao da viagem",
        type: "text",
        required: true,
        //ADICIONAR PATTERN
        title: "A duração da viagem deve ser de no minimo 50 dias"
    }
]

class CreateTripPage extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            form:{}
        }
    }
    render() {

        return (
            <div>
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
                                        <option>Testando1</option>
                                        <option>Testando2</option>
                                    </select>
                                </div>
                            )
                        }
                    })}
            </div>
        )
    }
}
export default CreateTripPage;
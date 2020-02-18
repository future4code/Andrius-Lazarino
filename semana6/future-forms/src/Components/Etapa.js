import React from 'react';
import styled from 'styled-components'



const Inicio = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;
`
const Botao = styled.button`
display:block;
margin-top:10%;
`

class Etapa extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            etapaAtual: 1,

            inputNome: "",
            inputIdade: "",
            inputEmail: "",
            inputEscolaridade: "medioincompleto",
            inputCurso: "",
            inputUnidade: ""

        }
    }



    atualiza = (etapa1, etapa2, etapa3, final) => {
        switch (this.state.etapaAtual) {
            case 1:
                return (etapa1);
            case 2:
                return (etapa2);
            case 3:
                return (etapa3);
            default:
                return (final);
        }
    }
    etapaAtual = () => {
        if ((this.state.inputNome === "") || (this.state.inputIdade === "") || (this.state.inputEmail === "")) {
            alert("Todos os campos são obrigatorios")
        } else {
            if ((this.state.etapaAtual === 1) && ((this.state.inputEscolaridade === 'medioincompleto') || (this.state.inputEscolaridade === 'mediocompleto'))) {
                this.setState({ etapaAtual: 3 })
                console.log("entrou aqui")
            }
            else if((this.state.etapaAtual===2) &&((this.state.inputCurso === "")||(this.state.inputUnidade === ""))){
                alert("Todos os campos são obrigatorios")
            }
            else {
                this.setState({ etapaAtual: this.state.etapaAtual + 1 })
            }
        }


    }


    inputNomeControlado = (event) => {
        this.setState({
            inputNome: event.target.value
        })
    }

    inputIdadeControlado = (event) => {
        this.setState({
            inputIdade: event.target.value
        })
    }

    inputEmailControlado = (event) => {
        this.setState({
            inputEmail: event.target.value
        })
    }

    inputEscolaridadeControlado = (event) => {
        this.setState({
            inputEscolaridade: event.target.value
        })
    }

    inputCursoControlado = (event) => {
        this.setState({
            inputCurso: event.target.value
        })
    }

    inputUnidadeControlado = (event) => {
        this.setState({
            inputUnidade: event.target.value
        })
    }


    render() {
        const etapa1 = (
            <Inicio>
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <p>1. Qual o seu nome?</p>
                <input value={this.state.inputNome} onChange={this.inputNomeControlado} />
                <p>2. Qual o sua idade?</p>
                <input value={this.state.inputIdade} onChange={this.inputIdadeControlado} />
                <p>3. Qual o seu email?</p>
                <input value={this.state.inputEmail} onChange={this.inputEmailControlado} />
                <p>4. Qual a sua escolaridade?</p>
                <select value={this.state.inputEscolaridade} onChange={this.inputEscolaridadeControlado}>
                    <option value='medioincompleto'>Ensino Médio Incompleto</option>
                    <option value='mediocompleto'>Ensino Médio Completo</option>
                    <option value='superiorincompleto'>Ensino Superior Incompleto</option>
                    <option value='superiorcompleto'>Ensino Superior Completo</option>
                </select>
                <Botao onClick={this.etapaAtual}>Próxima etapa</Botao>
            </Inicio>
        );
        const etapa2 = (
            <Inicio>
                <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                <p>5. Qual curso?</p>
                <input value={this.state.inputCurso} onChange={this.inputCursoControlado} />
                <p>6. Qual a unidade de ensino?</p>
                <input value={this.state.inputUnidade} onChange={this.inputUnidadeControlado} />
                <Botao onClick={this.etapaAtual}>Próxima etapa</Botao>
            </Inicio>
        );
        const etapa3 = (
            <Inicio>
                <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
                <p>7. Por que você não terminou um curso de graduação?</p>
                <input />
                <p>8. Você fez algum curso complementar?</p>
                <select>
                    <option>Nenhum</option>
                    <option>Curso técnico</option>
                    <option>Curso de inglês</option>
                </select>
                <Botao onClick={this.etapaAtual}>Próxima etapa</Botao>
            </Inicio>
        );
        const final = (
            <Inicio>
                <h3>O FORMULÁRIO ACABOU</h3>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
            </Inicio>
        );

        const etapaAtual = this.atualiza(etapa1, etapa2, etapa3, final)

        return (
            <Inicio>
                {etapaAtual}
            </Inicio>
        )
    }

}

export default Etapa

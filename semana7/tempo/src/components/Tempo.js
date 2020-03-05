import React from 'react';
import axios from 'axios';

const baseUrl = 'https://www.metaweather.com'
//const authToken = 'd4b296d5e9886ab0651c5895c5d4335b'

class Tempo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tempoAgora: false,
            diaTempo: false,
            inputPesquisa: ''
        }
    }

    componentDidMount() {
        //this.mostrarTempoAgora()
    }

    inputPesquisaControlado = (e) => {
        this.setState({ inputPesquisa: e.target.value })
    }


    pesquisarClima = () => {
        let idCidade
        const pesquisarCidadePromisse = axios.get(
            `${baseUrl}/api/location/search/?query=${this.state.inputPesquisa}`
        )
        pesquisarCidadePromisse.then(response => {
            idCidade = response.data[0].woeid
            console.log(response.data[0])
            const detalheCidadePromisse = axios.get(
                `${baseUrl}/api/location/${idCidade}`
            )
            detalheCidadePromisse.then(response => {
                this.setState({
                    tempoAgora: response.data,
                    diaTempo: response.data.consolidated_weather[0]
                })
                console.log(response.data.consolidated_weather[0])
            })
                .catch(error => {
                    console.log(error)
                })
        })
            .catch(error => {
                console.log(error)
            })

    }


    traduzTempo = (frase) => {
        switch (frase) {
            case 'Snow':
                return 'Neve'
            case 'Sleet':
                return 'Sleet'
            case 'Hail':
                return 'Saudar'
            case 'Thunderstorm':
                return 'Trovoada'
            case 'Heavy Rain':
                return 'Chuva pesada'
            case 'Light Rain':
                return 'Chuva leve'
            case 'Showers':
                return 'Chuveiros'
            case 'Heavy Cloud':
                return 'Nuvem pesada'
            case 'Light Cloud':
                return 'Nuvem clara'
            case 'Clear':
                return 'Claro'
        }
    }

    mostrarCidade = ()=>{
        return (<div>
            Cidade: {this.state.tempoAgora.title}
            <hr />
            Horário: {this.state.tempoAgora.time}
            <hr />
            latitude e longitude: {this.state.tempoAgora.latt_long}
            <hr />
            <div>

                hoje {this.state.diaTempo.applicable_date}
                <span>Tempo agora: {this.traduzTempo(this.state.diaTempo.weather_state_name)}</span>
                <span>umidade: {this.state.diaTempo.humidity}%</span>
                <span>Previsão: {this.state.diaTempo.predictability}%</span>
            </div>

        </div>)
    }
    render() {




        return (
            <div>
                {/* {this.state.tempoAgora} */}
                {/* {this.state.tempoAgora?<div>{this.state.tempoAgora}</div> : <div>Carregando...</div>} */}

                <input value={this.state.inputPesquisa} onChange={this.inputPesquisaControlado} />
                <button onClick={this.pesquisarClima}>Pesquisar e mostrar clima</button>

                {this.state.diaTempo && this.mostrarCidade()}
            </div>
        );

    }
}

export default Tempo;

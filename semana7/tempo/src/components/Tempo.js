import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Main = styled.div`
    margin-top:10%;
    text-align:center;
`
const Dia = styled.div`
    display:flex;
`
const Item = styled.span`
    margin-left:5px;
    margin-right:5px;
`
const Cidade = styled.div`
    margin-top:3%;
    border: 1px solid black;
`

const baseUrl = 'https://www.metaweather.com'


class Tempo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tempoAgora: false,
            diaTempo: false,
            listaDia:[],
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
                const diaTempo = response.data.consolidated_weather
                const listaDia = diaTempo.map((elemento, index) => {
                    return (
                        <Dia>
                            <Item>Dia {elemento.applicable_date}</Item>
                            <Item>Tempo agora: {this.traduzTempo(elemento.weather_state_name)}</Item>
                            <Item>Previsão: {elemento.predictability}%</Item>
                            <Item>Umidade: {elemento.humidity}%</Item>
                        </Dia>
                    )
                })
                ////////
                this.setState({
                    tempoAgora: response.data,
                    diaTempo: diaTempo,
                    listaDia:listaDia
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
            default:
                return 'Erro'
        }
    }

    listaDiasPrevisao = () => {
        const listaDia = this.state.diaTempo.map((elemento, index) => {
            return (
                <Dia>
                    <Item>Dia {this.state.diaTempo[0].applicable_date}</Item>
                    <Item>Tempo agora: {this.traduzTempo(this.state.diaTempo[0].weather_state_name)}</Item>
                    <Item>Previsão: {this.state.diaTempo[0].predictability}%</Item>
                    <Item>Umidade: {this.state.diaTempo[0].humidity}%</Item>
                </Dia>
            )
        })
        this.setState({listaDia:listaDia})
    }

    mostrarCidade = () => {
        return (<Cidade>
            Cidade: {this.state.tempoAgora.title}
            <hr />
            Horário: {this.state.tempoAgora.time.substr(11, 5)}
            <hr />
            latitude e longitude: {this.state.tempoAgora.latt_long}
            <hr />
            Previsão de 5 dias
            <div>
                {this.state.listaDia}
            </div>

        </Cidade>)
    }
    render() {




        return (
            <Main>
                
                <input placeholder="Insira uma cidade" value={this.state.inputPesquisa} onChange={this.inputPesquisaControlado} />
                <button onClick={this.pesquisarClima}>Pesquisar e mostrar clima</button>

                {this.state.diaTempo && this.mostrarCidade()}
            </Main>
        );

    }
}

export default Tempo;

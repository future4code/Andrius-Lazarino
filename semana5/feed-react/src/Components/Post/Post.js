import React from 'react';
import './Post.css';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

class Post extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            curtidas: 0,
            comentarios: 0,
            curtidaEstado: require("../../img/favorite-white.svg"),
            cliques: 0
        }
    }
    curtir = () => {
        if (this.state.curtidas === 0) {
            this.setState({
                curtidas: this.state.curtidas + 1,
                curtidaEstado: require("../../img/favorite.svg")
            })
        } else {
            this.setState({
                curtidas: this.state.curtidas - 1,
                curtidaEstado: require("../../img/favorite-white.svg")
            })
        }
    }

    comentar = () => {
        if (this.state.comentarios === 0) {
            this.setState({
                comentarios: this.state.comentarios + 1
            })
        } else {
            this.setState({
                comentarios: this.state.comentarios - 1
            })
        }
    }
    removerInput = () => {
        this.setState({
            comentarios: 0
        })
        this.comentarioInserirInput()
    }

    pressioneEnter = (e) => {
        console.log(e.key)
        if (e.key==='Enter'){
            this.removerInput()
        }
    }

    comentarioInserirInput = () => {
        if (this.state.comentarios === 1) {
            return (
                <div>
                    <input placeholder="Escreva seu comentário" onKeyPress={this.pressioneEnter} />
                    <button onClick={this.removerInput}>Comentar</button>
                </div>
            )
        }else{
            return (
                <div></div>
            )
        }
    }

    clicou = () => {
        this.setState({
            cliques: this.state.cliques + 1
        })
        console.log(this.state.cliques)
        if (this.state.cliques===1){
            this.curtir()
            console.log("Teste")
        }
        else if(this.state.cliques===3){
            this.setState({
                cliques: 0
            })
            this.curtir()
        }
    }

    render() {
        return (
            <div className="Post">
                <div className="titulo">
                    <img src={this.props.imagemUsuario} alt="Imagem não encontrada" />
                    <p><b>{this.props.nome}</b></p>
                </div>
                <img src={this.props.imagem} onClick={this.clicou} />
                <div className="PostFooter">
                    <div>
                        <img src={this.state.curtidaEstado} onClick={this.curtir} />
                        <label>{this.state.curtidas}</label>
                    </div>
                    <div>
                        <img src={require("../../img/comment_icon.svg")} onClick={this.comentar} />
                        <label>{this.state.comentarios}</label>
                    </div>
                </div>
                {this.comentarioInserirInput()}
            </div>
        )
    }
}

export default Post
import React from 'react';
import './Post.css';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

class Post extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            curtidas: 0,
            comentarios: 0,
            curtidaEstado: require("../../img/favorite-white.svg")
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

    comentarioInserirInput = () => {
        if (this.state.comentarios === 1) {
            return (
                <div>
                    <input placeholder="Escreva seu comentário" />
                    <button onClick={this.removerInput}>Comentar</button>
                </div>
            )
        }else{
            return (
                <div></div>
            )
        }
    }


    render() {
        return (
            <div className="Post">
                <div className="titulo">
                    <img src={this.props.imagemUsuario} alt="Imagem não encontrada" />
                    <p><b>{this.props.nome}</b></p>
                </div>
                <img src={this.props.imagem} />
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
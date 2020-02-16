import React from 'react';
import './Post.css';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import styled from 'styled-components';

const PostMain = styled.div`
    border: solid 1px #B3B9A0;
    width: 600px;
    margin-top: 0;
    margin-bottom: 3%;
`
const ImagemPost = styled.img`
    width: 100%;
    height: 30%;
`
const PostFooter = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding-right: 5%;
    padding-left: 5%;

`
const ComentarioECurtida = styled.div`
    margin-top: auto;
    margin-bottom: auto;
    width: 7%;

`
const FotoPerfil = styled.img`
    margin-left: 3%;
    width: 50px;
    border-radius: 50%;
    margin-top: 1%;
    margin-bottom: 1%;
`
const QuantidadeLikeComentario = styled.label`

`

const Icone = styled.img`


`

const Titulo = styled.div`
    display: flex;
    height: 10%;
`
const TituloParagrafo = styled.p`
    margin-left: 3%;
`




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
            <PostMain>
                <Titulo>
                    <FotoPerfil src={this.props.imagemUsuario} alt="Imagem não encontrada" />
                    <TituloParagrafo><b>{this.props.nome}</b></TituloParagrafo>
                </Titulo>
                <ImagemPost src={this.props.imagem} onClick={this.clicou} />
                <PostFooter>
                    <ComentarioECurtida>
                        <Icone src={this.state.curtidaEstado} onClick={this.curtir} />
                        <QuantidadeLikeComentario>{this.state.curtidas}</QuantidadeLikeComentario>
                    </ComentarioECurtida>
                    <ComentarioECurtida>
                        <Icone src={require("../../img/comment_icon.svg")} onClick={this.comentar} />
                        <QuantidadeLikeComentario>{this.state.comentarios}</QuantidadeLikeComentario>
                    </ComentarioECurtida>
                </PostFooter>
                {this.comentarioInserirInput()}
            </PostMain>
        )
    }
}

export default Post
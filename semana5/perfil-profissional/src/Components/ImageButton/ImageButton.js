import React from 'react';
import './ImageButton.css';

function ImageButton(props) {
    return (
        <div className="ImageButton">
            <a href={props.redirecionar} target="_blank">
                <img className="ImagemButton" src={props.imagem} />
                <p>{props.descricao}</p>
            </a>
        </div>
    );
}

export default ImageButton;

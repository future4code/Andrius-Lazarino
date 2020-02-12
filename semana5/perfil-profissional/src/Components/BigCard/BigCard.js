import React from 'react';
import './BigCard.css';

function BigCard(props) {
    return (
        <div id="BigCard">
            <img className="fotoPerfil" src={props.imagem} />
            <div>
                <p><b>{props.titulo}</b></p>
                <p>{props.descricao}</p>
            </div>

        </div>
    );
}

export default BigCard;

import React from 'react';
import './SmallCard.css';

function SmallCard(props) {
    return (
        <div id="SmallCard">
            <img className="iconeSmall" src={props.imagem} />
            <div>
                <p><b>{props.titulo}</b>{props.descricao}</p>
            </div>

        </div>
    );
}

export default SmallCard;

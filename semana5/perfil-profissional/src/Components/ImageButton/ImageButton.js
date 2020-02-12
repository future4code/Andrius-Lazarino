import React from 'react';
import './ImageButton.css';

 let pageSectionLista = document.getElementsByClassName("PageSection")

function ImageButton(props) {
     function verMaisMenos() {      
        
        if (props.descricao === "Ver Mais"){
            pageSectionLista[0].style.display = "none";
            pageSectionLista[1].style.display = "none";
            pageSectionLista[2].style.display = "none";
            pageSectionLista[3].style.display = "grid";
        }
        else{
            pageSectionLista[0].style.display = "grid";
            pageSectionLista[1].style.display = "grid";
            pageSectionLista[2].style.display = "grid";
            pageSectionLista[3].style.display = "none";
        }
    }
    return (
        <div className="ImageButton" onClick={verMaisMenos}>
            <a href={props.redirecionar} target="_blank">
                <img className="ImagemButton" src={props.imagem} />
                <p>{props.descricao}</p>
            </a>
        </div>
    );
}

export default ImageButton;

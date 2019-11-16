import React from 'react';

import "../css/StyleStatic.css";

function Card(props){
    return(
        <div className="card">
            <img src={props.icone} alt="icon" />
            <h1>{props.title}</h1>
        </div>
    );
    
}

export default Card;
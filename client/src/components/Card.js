import React from 'react';

import "../css/StyleStatic.css";

function Card(props){
    return(
        <div className="card">
            <h1>{props.title}</h1>
            <img src={props.icone} alt="icon"/>
        </div>
    );
    
}

export default Card;
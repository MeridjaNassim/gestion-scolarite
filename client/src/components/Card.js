import React from 'react';

import "../css/StyleStatic.css";

function Card(props){
    return(
        <div className="card">
            <img src={props.icone} alt="icon" />
            <h3>{props.title}</h3>
        </div>
    );
    
}

export default Card;
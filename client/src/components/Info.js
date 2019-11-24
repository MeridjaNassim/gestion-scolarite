import React from "react";
import "../css/Dash.css"

function Info(props){

    return(
        <div class="infoItem">
            <h3>{props.champ}</h3>
            <from>
                <input type="text" name={props.champ}/>
            </from>
        </div>
    );

}

export default Info;
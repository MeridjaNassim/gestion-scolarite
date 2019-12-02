import React from "react";
import "../css/Dash.css"

function Info(props){

    return(
        <div class="infoItem">
            <section>
                <h3>{props.champ}</h3>
                <form>
                    <input type="text" name={props.champ} />
                </form>
            </section>
        </div>
    );

}

export default Info;
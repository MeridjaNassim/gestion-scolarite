import React from "react";
import "../css/Dash.css";

function Module(props){

    let Mod = props.module;
    const cours = Mod.cours;
    //Module.name
    //Module.section ..
    return(

        <div className="Module">
            <h3>{Mod.name}</h3>
            {
                cours ? <label>section : {Mod.section}</label> : <label>Groupe: {Mod.groupe}</label> 
            }
        </div>
    );
}

export default Module;
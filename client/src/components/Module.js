import React from "react";
import "../css/Dash.css";
/**
 * 
 * @param {*} props 
 */
function Module(props){

    let Mod = props.module;
    const cours = Mod.cours;
    //Module.name
    //Module.section ..
    return(

        <div className="Modul">
            <h3>{Mod.name}</h3>
            {
                cours ? <label>section {Mod.section}</label> : <label>Groupe {Mod.groupe}</label> 
            }
        </div>
    );
}

export default Module;
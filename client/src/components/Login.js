import React from "react";
import "../css/StyleStatic.css";
import "../css/Login.css";

var errorMes ="";

function Login(props) {

    return (
        <div className="logincls">
            <div className="popCon">
                <h2>Connexion</h2>
                <p>Une connexion sécurisé et fiable
                    Attention : chaque utilisateur dispose d'une interface
                    propre a celui-ci selon son type
                </p>
                <form className="Form">    
                    <input className="input" type="text" name="username" value="Nom utilisateur"/>
                    <input className="input" type="text" name="password" value="Mot de passe" />
                    <p>{errorMes}</p>
                    <input className="But floating" type="submit" value="Suivant" />
                </form>
            </div>
            <button className="AnnulerBut" onClick={(e) => { props.onCancel(e) }}>Annuler</button>
        </div>
    );
}

export default Login;
import React from "react";
import "../css/StyleStatic.css";
import "../css/Login.css";

function Login(props) {

    return (
        <div className="logincls">
            <button onClick={(e)=>{props.onCancel(e)}}>Annuler</button>
            <h1>Connectez vous</h1>
            <p>Une connexion sécurisé et fiable
                Attention : chaque utilisateur dispose d'une interface
                propre a celui-ci selon son type
            </p>

        </div>
    );
}

export default Login;
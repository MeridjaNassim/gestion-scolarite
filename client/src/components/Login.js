import React from "react";
import Form from "./Form"
import "../css/StyleStatic.css";
import "../css/Login.css";


function Login(props) {

    return (
        <div className="logincls">
            <div className="popCon">
                <h2>Connexion</h2>
                <p>Une connexion sécurisé et fiable
                    Attention : chaque utilisateur dispose d'une interface
                    propre a celui-ci selon son type
                </p>
                <Form setlogin={props.setlogin} />
            </div>
            <button className="AnnulerBut" onClick={(e) => { props.onCancel(e) }}>Annuler</button>
        </div>
    );
}

export default Login;
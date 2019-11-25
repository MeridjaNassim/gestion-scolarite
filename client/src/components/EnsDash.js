import React from "react";
import "../css/Dash.css";
import pPic from "../assets/teacherprofile.svg";
import Info from "./Info";
import Module from "./Module";
class EnsDash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Nom : String ,
            Prenom : String ,
            DateNaissance : String ,
            LieuNaissance : String ,
            Adresse : String ,
            Telephone : String ,
            NSS : String ,
            EtatCivil : String ,
            Grade : String ,
            DateRecrutement : String ,
            Postes : String ,
            Modules : [{
                name: String ,
                cours : Boolean ,
                Section : String ,
                Groupe : String ,
            }] ,
        };
    }

    render() {
        return (
            <div className="divDash divEns">
                <div className="header">
                    <form id="EnsSelection">
                        <input type="search" name="Ens" id="Ens"/>
                    </form>
                    <button>Enregistrer</button>
                </div>
                <div className ="EnsCard">
                    <section className="PersonalInfo">
                        <img src={pPic} alt="Enseignant"/>
                        <section className="inforHolder">
                            <Info champ="Nom" value="" />
                            <Info champ="DateNai" value="" />
                            <Info champ="a" value="" />
                            <Info champ="Prenom" value="" />
                            <Info champ="Adresse" value="" />
                            <Info champ="Tel" value="" />
                            <Info champ="NSS" value="" />
                            <Info champ="EtatC" value="" />
                        </section>
                    </section>
                    <section className="ProfessionInfo">
                        <Info champ="Grade" value="" />
                        <Info champ="DateRec" value="" />
                        <div id="Postes"></div>
                        <div id="Modules">
                            <Module module="" />
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default EnsDash;
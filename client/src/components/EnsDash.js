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
                section : String ,
                groupe : String ,
            }] ,
        };
    }

    render() {
        let Module1 ={
                name: "SYC 1" ,
                cours : true ,
                section : "A" ,
                groupe : null ,
        }
        return (
            <div className="divDash divEns">
                <div className="header">
                    <form id="EnsSelection">
                        <input type="search" name="Ens" id="Ens" placeholder="Selectionez un enseignat" />
                    </form>
                    <button>Enregistrer</button>
                </div>
                <div className ="EnsCard">
                    <section className="PersonalInfo">
                        <img src={pPic} alt="Enseignant"/>
                        <section className="inforHolder">
                            <Info champ="Nom" value="" />
                            <Info champ="Date de Naissance" value="" />
                            <Info champ="à" value="" />
                            <Info champ="Prénom" value="" />
                            <Info champ="Adresse" value="" />
                            <Info champ="Téléphone" value="" />
                            <Info champ="NSS" value="" />
                            <Info champ="Etat Civil" value="" />
                            <div className="infoItem"></div>
                        </section>
                    </section>
                    <section className="ProfessionInfo">
                        <Info id="Grade" champ="Grade" value="" />
                        <Info id="DateRec" champ="DateRec" value="" />
                        <Info id="Postes" champ="Postes" value=""/>
                        <div id="Modules">
                            <Module module={Module1} />
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default EnsDash;
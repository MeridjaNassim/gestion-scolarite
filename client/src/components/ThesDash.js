import React from "react";
import "../css/Dash.css";

class ThesDash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title : String ,
            branche : String ,
            Encadreur : String ,
            Etudiant : String ,
            links : [String]
        };
    }

    render() {
        return (
            <div className ="divDash divThese">
                <section >
                    <form className="LeftForm" action="">
                        <h2>Ajouter une thèse</h2>
                        
                        <input name="Title" type="text" placeholder="Titre"/>
                        <input name="Branche" type="text" placeholder="Branche"/>
                        <input name="Encadreur" type="text" placeholder="Encadreur"/>
                        <input name="Etudiants" type="text" placeholder="Etudiants"/>
                        <textarea name="links" placeholder="Liens lié">

                        </textarea>
                    </form>
                </section>
                <section className="RightSide">
                    <p id="stateDate">date creation <br/> 12/11/2019</p>
                    <button>
                        Ajouter
                    </button>
                </section>
            </div>
        );
    }
}

export default ThesDash;
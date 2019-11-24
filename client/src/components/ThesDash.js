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
                <section className="LeftForm">
                    <form action="">
                        <input name="Title" type="text" placeholder="title"/>
                        <input name="Branche" type="text" placeholder="title"/>
                        <input name="Encadreur" type="text" placeholder="title"/>
                        <div className="EtudContainer">
                        </div>
                        <textarea name="links">

                        </textarea>
                    </form>
                </section>
                <section className="RightSide">
                    <p id="state"></p>
                    <button>
                        Ajouter
                    </button>
                </section>
            </div>
        );
    }
}

export default ThesDash;
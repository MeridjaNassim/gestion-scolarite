import React from "react";

//Components
import Card from './Card';

//Stylesheet
import "../css/StyleStatic.css" ;

//images
import HomeImage from '../Resources/scolarité-ado.jpg';
import DesImage from '../Resources/file-20181211-76974-1vep43e.jpg';

//icons
import ModifEns from '../Resources/teacher.svg';
import esiLOGO from '../Resources/esi.png';
import outils from '../Resources/pencil-case.svg';

function HomePage(){

    return(
        <div>
            <header>
                <img src={HomeImage} alt="Scola"/>
            <nav>
                <img src={esiLOGO} alt="Scolarité" className="esi"/>
                <h2>Scolarité web app</h2>
                <button>Login</button>
            </nav>
                <img src={outils} alt="Outils"></img>
                <h1>Des outils indispensables</h1>
                <h2>pour la scolarité</h2>
                <h3>pour une fluidité <br />et une facilité sanglante</h3>

                <p>Plus de details</p>
                <button>></button>
            </header>
            <div className="HomeGestionDescription">
                <h1>Gestion de scolarité</h1>
                <p>text</p>
                <img src={DesImage} alt="Gestion-Scolarité"/>
            </div>
            <div className="HomeToutOutils">
                <h1>Tout les outils nécessaire</h1>
                <section className="CardHolder" >
                    <Card title="Modifier Enseignant" icone={ModifEns}/>
                    <p>+ afficher plus</p>
                </section>
            </div>
            <footer>
                <section id="secLOGO">
                    <img src={esiLOGO} alt="esiSCO" />
                    <h2>SCO</h2>
                </section>
                <section id="secRights">
                    <p>Scolarité Web App 2019 Tout droit réservé sous license ESI</p>
                    <h3>Réalisé par</h3>
                    <p>Meridja Abdallah Nassim<br/>Boudis Mohamed Abdelmadjid<br/>Adjal yacine</p>
                </section>
                
                <section id="secPRob">
                    <p>Problème ? <br/>Contactez L'adminisrateur :<br/>AdminSCO@esi.dz</p>
                </section >

                <section id="secESI">
                    <img src={esiLOGO} alt="esiSCO" />
                    <p>école nationale supérieure<br />d'informatique<br />Alger Ouedsmar</p>
                </section>

            </footer>
        </div>
    );
}

export default HomePage;
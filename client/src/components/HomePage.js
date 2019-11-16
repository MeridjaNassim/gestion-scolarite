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
            <img id="fontimage" src={HomeImage} alt="Scola" />
            <header>
                <div className="nav">
                    <img src={esiLOGO} alt="Scolarité" className="esi"/>
                    <h2>| Scolarité web app</h2>
                    <button className="Login">Se Connecter</button>
                </div>
                <div className="centralText">
                    <img className="outilico floating" src={outils} alt="Outils"></img>
                    <h1 className="MainTXT">Des outils indispensables</h1>
                    <h1 className="light">pour la scolarité</h1>
                    <h2 className="light">Automatisé et facile à utiliser</h2>
                </div>
                <div className="DetailSection">
                    <h3 >Plus de details</h3>
                    <button className="floating">v</button>
                </div>
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
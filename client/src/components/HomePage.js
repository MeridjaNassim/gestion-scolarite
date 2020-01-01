import React, { useState } from "react";

//Components
import Card from "./Card";
import Login from "./Login";

//Stylesheet
import "../css/StyleStatic.css";

//images
import HomeImage from "../assets/scolarité-ado.jpg";
import DesImage from "../assets/file-20181211-76974-1vep43e.jpg";
import footerimg from "../assets/footeresi.png";

//icons
import esiLOGO from "../assets/esi.png";
import outils from "../assets/pencil-case.svg";
import these from "../assets/open-book.svg";
import calendar from "../assets/calendar.svg";
import study from "../assets/study.svg";
import classroom from "../assets/classroom.svg";

/**
 * function ScrollDown 
 * @description scrolling down button in Home page
 */
function ScrollDown() {
  var element = document.querySelector("#scrollto");
  element.scrollIntoView({ behavior: "smooth" });
}

/**
 * @param {props}  props
 * @description JSX of the home page view
 */

function HomePage(props) {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <img id="fontimage" src={HomeImage} alt="Scola" />

      {showLogin ? (
        <Login
          setlogin={props.setlogin}
          setUser={props.setUser}
          onCancel={e => setShowLogin(false)}
        />
      ) : (
        <header>
          <div className="nav">
            <img src={esiLOGO} alt="Scolarité" className="esi" />
            <h2>| Scolarité web app</h2>
            <button onClick={e => setShowLogin(true)} className="Login">
              Se Connecter
            </button>
          </div>

          <div className="centralText">
            <img className="outilico floating" src={outils} alt="Outils"></img>
            <h1 className="MainTXT">Des outils indispensables</h1>
            <h1 className="light">pour la scolarité</h1>
            <h2 className="light">Automatisé et facile à utiliser</h2>
          </div>
          <div className="DetailSection">
            <h3>Plus de details</h3>
            <button onClick={ScrollDown} className="floating">
              v
            </button>
          </div>
        </header>
      )}
      <div id="scrollto" className="HomeGestionDescription">
        <h1>Gestion de scolarité</h1>
        <p>
          Automatiser le traitement de l’information est une solution
          inévitable, c’est pour cela que nous avons opté pour une application
          web accessible par tous les acteurs principaux de l’Établissement avec
          une interface et des fonctionnalités accessible et spécifique à
          chacun, permettant une gestion meilleure et un travail cadré sans
          risque
        </p>
        <img className=" floating" src={DesImage} alt="Gestion-Scolarité" />
      </div>
      <div className="HomeToutOutils">
        <h1>Tout les outils nécessaires</h1>
        <section className="HTOContainer">
          <section className="CardHolder floating">
            <Card title="Entrée des étudiants" icone={classroom} />
            <Card title="Gestion continue" icone={these} />
            <Card title="Planification" icone={calendar} />
            <Card title="Gestion du parcours" icone={study} />
          </section>
          <h4>Chacun dispose de plusieurs fonctionnalités</h4>
        </section>
      </div>
      <footer>
        <section className="secProb">
          <p>
            Problème ? <br />
            Contactez L'adminisrateur :<br />
            AdminSCO@esi.dz
          </p>
        </section>
        <section className="secRights">
          <p>Scolarité Web App 2019 Tout droit réservé sous license ESI</p>
          <h3>Réalisé par</h3>
          <p>
            Meridja Abdallah Nassim
            <br />
            Boudis Mohamed Abdelmadjid
            <br />
            Adjal yacine
          </p>
        </section>
        <img className="fimg" src={footerimg} alt="scola" />
      </footer>
    </div>
  );
}

export default HomePage;

import React from "react";
import "../css/Dash.css";
import pPic from "../assets/teacherprofile.svg";
import Info from "./Info";
import Module from "./Module";
import axios from "axios";
class EnsDash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      nom: "",
      prenom: "",
      datenaissance: "",
      lieunaissance: "",
      adresse: "",
      telephone: "",
      nss: "",
      etatcivil: "",
      grade: "",
      daterecrutement: "",
      postes: "",
      modules: [
        {
          name: "SYC 1",
          cours: true,
          section: "A",
          groupe: null
        }
      ]
    };
  }

  _onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  searchEns(e) {
    if (this.state.id) {
      let params = {
        _id: this.state.id
      };
      axios
        .get(`http://localhost:8080/api/enseignants/?_id=${params._id}`)
        .then(res => {
          this.updateFormState(res.data[0]);
        })
        .catch(err => console.error(err));
    }
  }
  updateFormState(newState) {
    console.log(newState);
    console.log(new Date(newState.date_naissance).toISOString().slice(0, 10));
    this.setState({
      nom: newState.nom,
      prenom: newState.prenom,
      datenaissance: new Date(newState.date_naissance)
        .toISOString()
        .slice(0, 10),
      lieunaissance: newState.lieu_naissance,
      adresse: newState.adresse,
      telephone: newState.num_tels.join(","),
      nss: newState.nss,
      etatcivil: newState.etat_civil,
      grade: newState.grade,
      daterecrutement: new Date(newState.date_recrutement)
        .toISOString()
        .slice(0, 10),
      postes: newState.postes.join(",")
    });
  }

  SendData(e) {
    e.preventDefault();
    let data = {
      nom: this.state.nom,
      prenom: this.state.prenom,
      date_naissance: this.state.datenaissance,
      lieu_naissance: this.state.lieunaissance,
      adresse: this.state.adresse,
      num_tels: this.state.telephone.split(",").map(s => s.trim()),
      nss: this.state.nss,
      etat_civil: this.state.etatcivil,
      grade: this.state.grade,
      date_recrutement: this.state.daterecrutement,
      postes: this.state.postes.split(",").map(s => s.trim())
    };

    axios
      .patch(
        `http://localhost:8080/api/enseignants/update?_id=${this.state.id}`,
        data
      )
      .then(res => {
        console.log(res);
        alert("Informations modifier avec succes");
      })
      .catch(err => {
        console.error(err);
        alert("Error dans la modification");
      });
  }
  render() {
    return (
      <div className="divDash divEns">
        <div className="header">
          <form id="EnsSelection">
            <input
              type="search"
              name="id"
              id="Ens"
              onChange={e => this._onChange(e)}
              value={this.state.id}
              placeholder="Selectionez un enseignant par id"
            />
          </form>
          <button onClick={e => this.searchEns(e)}>Recherche</button>
        </div>
        <div className="EnsCard">
          <section className="PersonalInfo">
            <img src={pPic} alt="Enseignant" />
            <form className="LeftForm">
              <h2>Modifier Information d'un enseignant</h2>
              <h3 style={{ textAlign: "left" }}>
                Séparer les champs a valeurs multiples par ","
              </h3>
              <input
                name="nom"
                type="text"
                placeholder="Nom"
                value={this.state.nom}
                onChange={e => this._onChange(e)}
              />
              <input
                name="prenom"
                type="text"
                placeholder="Prenom"
                value={this.state.prenom}
                onChange={e => this._onChange(e)}
              />
              <input
                name="datenaissance"
                type="date"
                placeholder="Date Naissance"
                value={this.state.datenaissance}
                onChange={e => this._onChange(e)}
              />
              <input
                name="lieunaissance"
                type="text"
                placeholder="Lieu de naissance"
                title="Date naissance"
                value={this.state.lieunaissance}
                onChange={e => this._onChange(e)}
              />
              <input
                name="adresse"
                type="text"
                placeholder="Adresse"
                value={this.state.adresse}
                onChange={e => this._onChange(e)}
              />
              <input
                name="telephone"
                type="text"
                placeholder="Numéro de téléphone"
                value={this.state.telephone}
                onChange={e => this._onChange(e)}
              />
              <input
                name="nss"
                type="text"
                placeholder="NSS"
                value={this.state.nss}
                onChange={e => this._onChange(e)}
              />
              <input
                name="etatcivil"
                type="text"
                placeholder="Etat Civil"
                value={this.state.etatcivil}
                onChange={e => this._onChange(e)}
              />
              <input
                name="grade"
                type="text"
                placeholder="Grade"
                value={this.state.grade}
                onChange={e => this._onChange(e)}
              />
              <input
                name="postes"
                type="text"
                placeholder="Postes"
                value={this.state.postes}
                onChange={e => this._onChange(e)}
              />
              <input
                name="daterecrutement"
                title="date Recrutement"
                type="date"
                placeholder="Date Recrutement"
                value={this.state.daterecrutement}
                onChange={e => this._onChange(e)}
              />
              <button
                style={{
                  width: "25%",
                  height: "3rem",
                  marginLeft: "25%",
                  marginRight: "25%",
                  marginTop: "5% ",
                  marginBottom: "5% "
                }}
                onClick={e => this.SendData(e)}
              >
                Enregistrer
              </button>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

export default EnsDash;

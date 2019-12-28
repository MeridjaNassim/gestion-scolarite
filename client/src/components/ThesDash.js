import React from "react";
import "../css/Dash.css";
import axios from "axios";
class ThesDash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titre: "",
      branche: "",
      encadreurs: "",
      description: "",
      promoteurs: "",
      etudiants: "",
      links: ""
    };
  }
  _onSubmit(e) {
    console.table(this.state);
    // preprocessing data ,
    let data = {
      titre: this.state.titre,
      branche: this.state.branche,
      description: this.state.description,
      promoteur_ids: this.state.promoteurs.split(",").map(s => s.trim()),
      encadreur_ids: this.state.encadreurs.split(",").map(s => s.trim()),
      etudiants_ids: this.state.etudiants.split(",").map(s => s.trim()),
      liens: this.state.links.split(",").map(s => s.trim())
    };

    console.log(data);

    //
    /// sending data to backend
    axios
      .post("http://localhost:8080/api/memoires/add", data)
      .then(res => {
        console.log(res);
        alert("Ajouter avec succée");
        this._resetState();
      })
      .catch(err => {
        console.error(err);
        alert("Erreur");
      });

    ///
  }
  _onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  _resetState() {
    this.setState({
      titre: "",
      branche: "",
      encadreurs: "",
      description: "",
      promoteurs: "",
      etudiants: "",
      links: ""
    });
  }
  render() {
    return (
      <div className="divDash divThese">
        <section>
          <form className="LeftForm">
            <h2>Ajouter une thèse</h2>
            <h3 style={{ textAlign: "left" }}>
              Séparer les champs a valeurs multiples par ","
            </h3>
            <input
              name="titre"
              type="text"
              placeholder="Titre"
              value={this.state.titre}
              onChange={e => this._onChange(e)}
            />
            <input
              name="branche"
              type="text"
              placeholder="Branche"
              value={this.state.branche}
              onChange={e => this._onChange(e)}
            />
            <input
              name="description"
              type="text"
              placeholder="Desctiption"
              value={this.state.description}
              onChange={e => this._onChange(e)}
            />
            <input
              name="promoteurs"
              type="text"
              placeholder="Promoteurs"
              value={this.state.promoteurs}
              onChange={e => this._onChange(e)}
            />
            <input
              name="encadreurs"
              type="text"
              placeholder="Encadreurs"
              value={this.state.encadreurs}
              onChange={e => this._onChange(e)}
            />
            <input
              name="etudiants"
              type="text"
              placeholder="Etudiants"
              value={this.state.etudiants}
              onChange={e => this._onChange(e)}
            />
            <textarea
              name="links"
              placeholder="Liens lié "
              onChange={e => this._onChange(e)}
              value={this.state.links}
            ></textarea>
          </form>
        </section>
        <section className="RightSide">
          <p id="stateDate">
            date creation <br /> {new Date().toLocaleDateString()}
          </p>
          <button onClick={e => this._onSubmit(e)}>Ajouter</button>
        </section>
      </div>
    );
  }
}

export default ThesDash;

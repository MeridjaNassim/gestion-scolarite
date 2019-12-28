import React from "react";
import "../css/Login.css";
import axios from "axios";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.errorMes = "";
    this.state = {
      userName: "Nom d'utilisateur",
      passwd: "Mot de passe"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.focused = this.focused.bind(this);
    this.focusedOut = this.focusedOut.bind(this);
    this.setlogin = props.setlogin;
    this.setUser = props.setUser;
    this.TextbyType = this.TextbyType.bind(this);
  }

  TextbyType(a) {
    return a === "passwd" ? "Mot de passe" : "Nom d'utilisateur";
  }

  focusedOut(e) {
    if (e.target.value === "") {
      if (e.target.name === "passwd") e.target.type = "text";
      this.setState({ [e.target.name]: this.TextbyType(e.target.name) });
    }
  }

  focused(e) {
    if (e.target.name === "passwd") e.target.type = "password";
    if (e.target.value === this.TextbyType(e.target.name)) {
      this.setState({ [e.target.name]: "" });
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    /// getting user data :
    let body = {
      username: this.state.userName,
      password: this.state.passwd
    };
    axios
      .post("http://localhost:8080/login", body)
      .then(res => {
        let { id, username, email } = res.data.user;
        console.log(res.data.user);

        if (id) {
          console.log(username, email);
          this.setUser(res.data);
          this.setlogin(true);
        } else {
          this.handleError();
        }
      })
      .catch(err => {
        // bad credentials
        alert("Compte inexistant ou username/password incorrecte");
      });
    ///
  }
  handleError() {
    alert("Error");
  }

  render() {
    return (
      <div className="Form">
        <input
          className="input"
          type="text"
          name="userName"
          value={this.state.userName}
          onChange={this.handleChange}
          onFocus={this.focused}
          onBlur={this.focusedOut}
        />
        <input
          className="input"
          type="text"
          name="passwd"
          value={this.state.passwd}
          onChange={this.handleChange}
          onFocus={this.focused}
          onBlur={this.focusedOut}
        />
        <p>{this.errorMes}</p>
        <input
          className="But floating"
          type="submit"
          onClick={e => this.handleSubmit(e)}
          value="Suivant"
        />
      </div>
    );
  }
  s;
}

export default Form;

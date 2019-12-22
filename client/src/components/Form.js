import React from "react" ;
import "../css/Login.css";

class Form extends React.Component {

    constructor (props){
        super(props);
        this.errorMes = "";
        this.state = {
            userName : "Nom d'utilisateur",
            passwd :  "Mot de passe" 
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  
        this.focused = this.focused.bind(this);
        this.focusedOut = this.focusedOut.bind(this);
        this.setlogin = props.setlogin;
        this.TextbyType = this.TextbyType.bind(this);
    }



TextbyType(a){
    return ((a === "passwd") ? "Mot de passe" : "Nom d'utilisateur" );
}

focusedOut(e){
    if(e.target.value === '') {
        if (e.target.name === "passwd")
            e.target.type = "text";
        this.setState({ [e.target.name]: this.TextbyType(e.target.name) }) 
    }
}

focused(e){
    if (e.target.name === "passwd")
        e.target.type = "password";
    if (e.target.value === this.TextbyType(e.target.name))
    {
        this.setState({ [e.target.name]: '' });
    }
}

handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });

}

handleSubmit(e){
    e.preventDefault();
    this.setlogin(true);
}

render(){
    
    return (
        <div className="Form">
            <input className="input" type="text" name="userName" value={this.state.userName} onChange={this.handleChange} onFocus={this.focused} onBlur={this.focusedOut}/>
            <input className="input" type="text" name="passwd" value={this.state.passwd} onChange={this.handleChange} onFocus={this.focused} onBlur={this.focusedOut} />
            <p>{this.errorMes}</p>
            <input className="But floating" type="submit" value="Suivant" />
        </div >
    );
}


}

export default Form;


import React, { useState } from "react";
import HomePage from "./HomePage";
//import Login from "./Login";
import "../css/App.css";



function App() {

  const [Loged,setLoged] = useState(false);

  return (
    <div className="App">
      {
        !Loged ? <HomePage setlogin={setLoged} /> : <div></div>
      }
    </div>
  );
}

export default App;

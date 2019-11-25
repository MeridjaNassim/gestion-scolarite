import React, { useState } from "react";
import HomePage from "./HomePage";
import Dashboard from "./Dashboard";
//import Login from "./Login";
import "../css/App.css";

//import ThesDash from "./ThesDash";

function App() {

  const [Loged,setLoged] = useState(false);

  return (
    <div className="App">
      {
        Loged ? <HomePage setlogin={setLoged} /> : <Dashboard />
      }
    </div>
  );
}

export default App;

import React, { useState } from "react";
import HomePage from "./HomePage";
//import Login from "./Login";
import "../css/App.css";

//import ThesDash from "./ThesDash";
import EnsDash from "./EnsDash";

function App() {

  const [Loged,setLoged] = useState(false);

  return (
    <div className="App">
      {
        !Loged ? <HomePage setlogin={setLoged} /> : <EnsDash />
      }
    </div>
  );
}

export default App;

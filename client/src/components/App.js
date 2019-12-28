import React, { useState } from "react";
import HomePage from "./HomePage";
import Dashboard from "./Dashboard";
//import Login from "./Login";
import "../css/App.css";

//import ThesDash from "./ThesDash";

function App() {
  const [Loged, setLoged] = useState(false);
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      {Loged ? (
        <Dashboard setLogin={setLoged} userData={user} />
      ) : (
        <HomePage setlogin={setLoged} setUser={setUser} />
      )}
    </div>
  );
}

export default App;

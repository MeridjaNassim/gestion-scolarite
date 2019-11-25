import React, { useState } from "react";
import EnsDash from "./EnsDash";
import ThesDash from "./ThesDash";


function Dashboard(){
    const [ges,setGes] =useState(true);

    //a enlever  juste pour le warning
    if(1 == 0) setGes(false);

    return(
        <div className="DashBoard">
            <section className="LeftDr">

            </section>
            <section className="TopDraw">

            </section>
            <div className="mainContainer">
                {
                    (!ges) ? <EnsDash /> : <ThesDash />
                }
            </div>
            
        </div>
    );
}

export default Dashboard ;
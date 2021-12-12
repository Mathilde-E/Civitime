import React from 'react'
import './App.css';
import woman from "./assets/woman.svg";
import man from "./assets/man.svg";
import skin from "./assets/skin.svg";
import tShirt from "./assets/t-shirt.svg";
import green from "./assets/color-88C10F.svg";
import brown from "./assets/color-533724.svg";
import grey from "./assets/color-B2C7C7.svg";
import pink from "./assets/color-E0A39A.svg";
import yellow from "./assets/color-FCCC84.svg";
import palePink from "./assets/color-FCD7B8.svg";
import red from "./assets/color-FF1414.svg";
import stripes from "./assets/color-striped.svg";

const App = () => {
    return <div id="page"> 
        <div id="container" >
            <h1>Profil</h1>
            <div id="body">
                <p className="center">Lequel de ces deux avatars préférez-vous ?</p>
                <div className="row" id="characters">
                    <img src={man} id="man" alt="homme" />
                    <img src={woman} id="woman" alt="femme" />
                </div>
                <div className="center">
                    <hr />
                    <div className="row">
                        <img src={skin} className="detail" alt="couleur de peau" />
                        <img src={palePink} className="color" alt="pale" />
                        <img src={pink} className="color" alt="rose" />
                        <img src={yellow} className="color" alt="jaune" />
                        <img src={brown} className="color" alt="marron" />
                    </div>
                    <div>
                        <img src={tShirt} className="detail" id="tShirt" alt="t-shirt" />
                        <img src={grey} className="color" alt="gris" />
                        <img src={green} className="color" alt="vert" />
                        <img src={red} className="color" alt="rouge" />
                        <img src={stripes} className="color" alt="rayé" />
                    </div>
                    <button> VALIDER </button>    
                </div>
            </div>
        </div>
    </div>
}

export default App;

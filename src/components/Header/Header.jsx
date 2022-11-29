import React from "react"
import {Link} from "react-router-dom";
import "./header.css"

import kLogo from "../../images/headerLogo/kLogo.png"
import houseLogo from "../../images/headerLogo/houseLogo.png"
import sLogo from "../../images/headerLogo/sLogo.png"
import aLogo from "../../images/headerLogo/aLogo.png"

// Affichage du header
export default function Header() {
    return (
        <div className="container">
            <div className="header">
                <div className="logo">
                    <img className="kLogo" src={kLogo} alt="K"></img>
                    <img className="houseLogo" src={houseLogo} alt="House"></img>
                    <img className="sLogo" src={sLogo} alt="S"></img>
                    <img className="aLogo" src={aLogo} alt="A"></img>
                </div>
                <nav className="nav">
                    <Link to="/">Accueil</Link>
                    <Link to="/about">A propos</Link>
                </nav>
            </div>
        </div>
    )
}
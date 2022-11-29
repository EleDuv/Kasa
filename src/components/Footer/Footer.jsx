import React from "react"
import './footer.css'

import kLogo from "../../images/footerLogo/kLogo.png"
import houseLogo from "../../images/footerLogo/houseLogo.png"
import sLogo from "../../images/footerLogo/sLogo.png"
import aLogo from "../../images/footerLogo/aLogo.png"

export default function Footer() {
    return (
        <div className="footer page">
            <div className="footerLogo">
                <img className="kLogo" src={kLogo} alt="K"></img>
                <img className="houseLogo" src={houseLogo} alt="House"></img>
                <img className="sLogo" src={sLogo} alt="S"></img>
                <img className="aLogo" src={aLogo} alt="A"></img>
            </div>
            <h2>© 2020 Kasa. All rights reserved</h2>
        </div>
    )
}
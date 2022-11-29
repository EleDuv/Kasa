import React, { useState } from 'react'
import './collapse.css'
import upArrow from '../../images/arrows/upArrow.png'
import downArrow from '../../images/arrows/downArrow.png'

// Affichage des collapse des pages logement et à propos
export default function Collapse (props) {
    const [isOpen, setIsOpen] = useState(false)

    function toggle() {
        setIsOpen(!isOpen)
    }

    return (
        <div className="collapseContainer" >
            <div className="collapseTitle" onClick={toggle}>
                <h2>{props.title}</h2>
                {isOpen ? <img src={upArrow} alt="upArrow" /> : <img src={downArrow} alt="downArrow"/>}
            </div>
            {isOpen ? <div className="collapseDescription">{props.description}</div> : ""}
        </div>
    )
}
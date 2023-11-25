import React from "react";
import { Link } from "react-router-dom"

function VendingMachine() {
    return (
        <>
            <div>I'm Boxxo-chan! Here to serve!~ </div>
            <img src="https://cdn.myanimelist.net/images/characters/11/505028.jpg" alt="boxxo-chan" />

            <div>
                <ul>
                    <li><Link to="/Soda">Soda</Link></li>
                    <li><Link to="/Chips">Chips</Link></li>
                    <li><Link to="/NuclearBomb">Click for a Surprise!</Link></li>
                </ul>
            </div>
        </>
    )
}

export default VendingMachine;
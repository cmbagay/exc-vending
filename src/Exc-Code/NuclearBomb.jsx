import React from "react";
import { Link } from "react-router-dom"

function NuclearBomb() {
    return (
        <>
            <h1>Woops! That's not right!</h1>
            <img src="https://media.tenor.com/UlISapaipDYAAAAM/nuke.gif" alt="nuke" />
            <p><Link to="/">Want Something Else?</Link></p>

        </>
    )
}


export default NuclearBomb;
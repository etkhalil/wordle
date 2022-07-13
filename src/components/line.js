import React from "react";
import './line.css';
import Tile from "./tile";

function Line ({word, guess}) {
    return (<div className="line">
        <Tile letter={word[0]} guess={guess[0]} word={guess} />
        <Tile letter={word[1]} guess={guess[1]} word={guess} />
        <Tile letter={word[2]} guess={guess[2]} word={guess} />
        <Tile letter={word[3]} guess={guess[3]} word={guess} />
        <Tile letter={word[4]} guess={guess[4]} word={guess} />
    </div>)
}

export default Line
import React from "react";
import { useEffect } from "react";
import './tile.css';

function Tile ({letter, guess, word}) {
    let classes = "tile ";
    if (letter === guess) classes += "green animate "
    else if (word.includes(letter)) classes += "yellow animate"

    return (<div className={classes}>{letter}</div>)
}

export default Tile
import React from "react";
import { useEffect } from "react";
import './tile.css';

function Tile ({letter, guessLetter, word}) {
    let classes = "tile ";
    if (letter === guessLetter && word.length %5 === 0) classes += "green animate "
    else if (word.includes(letter) && word.length%5 === 0) classes += "yellow animate"

    return (<div className={classes}>{letter}</div>)
}

export default Tile
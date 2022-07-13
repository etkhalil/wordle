import React from "react";
import './line.css';
import Tile from "./tile";

function Line ({word, guess}) {
    return (<div className="line">
        <Tile letter={word[0]} guessLetter={guess[0]} word={word} />
        <Tile letter={word[1]} guessLetter={guess[1]} word={word} />
        <Tile letter={word[2]} guessLetter={guess[2]} word={word} />
        <Tile letter={word[3]} guessLetter={guess[3]} word={word} />
        <Tile letter={word[4]} guessLetter={guess[4]} word={word} />
    </div>)
}

export default Line
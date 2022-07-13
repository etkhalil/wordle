import React from "react";
import './button.css';

function Button ({text, handleClick}) {
    return (<button className="btn primary" onClick={handleClick}>{text}</button>)
}

export default Button
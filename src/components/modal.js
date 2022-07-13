import React, { useState } from "react";
import './modal.css';
import Button from "./button";

function Modal ({handleStart, isOpen}) {
    let classes = "modal"
    classes += isOpen ? " open" : ""

    return (<div className={classes}>
        <h2>Congrats you Won!</h2>
        <Button handleClick={() => {handleStart()}} text="Start Over" />
    </div>)
}

export default Modal
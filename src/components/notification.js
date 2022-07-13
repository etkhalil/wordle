import React, { useState } from "react";
import './notification.css';

function Notification ({text, isOpen}) {
    let classes = "notification"
    classes += isOpen ? " open" : ""
    return (<div className={classes}>
        {text}
    </div>)
}

export default Notification
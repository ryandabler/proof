import React from "react";

import "./text-box.css";

export default function TextBox(props) {
    return (
        <textarea className="text-box" onInput={(e) => props.onInput(e.target.value)} />
    );
}
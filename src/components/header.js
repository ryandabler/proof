import React from "react";

import "./header.css";

export default function Header(props) {
    return (
        <header className="header">
            <span className="proof">Proof</span>
            <ul className="menu">
                <li>Proofread</li>
                <li>Help</li>
            </ul>
        </header>
    );
}
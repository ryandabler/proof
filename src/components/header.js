import React from "react";
import { Link } from "react-router-dom"

import "./header.css";

export default function Header() {
    return (
        <header className="header">
            <Link to={"/"} className="plain-link proof">
                Proof
            </Link>
        </header>
    );
}
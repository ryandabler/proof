import React from "react";

import "./menu.css";

export default function Menu() {
    return (
        <div className="menu">
            <button className="menu-item">File</button>
            <button className="menu-item">View</button>
            <button className="menu-item">Edit</button>
            <button className="menu-item">Settings</button>
            <button className="menu-item">Project</button>
            <button className="menu-item">About</button>
        </div>
    );
}
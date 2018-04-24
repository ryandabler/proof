import React from "react";

import "./menu.css";

export default function Menu(props) {
    return (
        <div className="menu">
            <button>File</button>
            <button>View</button>
            <button>Edit</button>
            <button>Settings</button>
            <button>Project</button>
            <button>About</button>
        </div>
    );
}
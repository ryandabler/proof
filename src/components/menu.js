import React from "react";

import { toggleMenu } from "../utilities";

import "./menu.css";

export default function Menu() {
    const menuItems = [
        [
            "File",
            [
                "New Project",
                "Open Project",
                "Export...",
                "Import..."
            ]
        ], [
            "View",
            [
                "Preview",
                "Header/Footer"
            ]
        ], [
            "Edit",
            [
                "Insert character"
            ]
        ], [
            "Settings",
            [
                "Parser",
                "Preferences"
            ]
        ], [
            "Project",
            [
                "Add image",
                "Edit details",
                "Delete",
                "Push",
                "Pull"
            ]
        ], [
            "About",
            [
                "Help",
                "About"
            ]
        ]
    ];

    const refs = {};

    const menuButtons = menuItems.map(menuGroup => 
        <div key={menuGroup[0]} className="menu-group">
            <button className="menu-item" onClick={(e) => toggleMenu(e, menuGroup[0], refs)}>{menuGroup[0]}</button>
            <div className="menu-dropdown hidden" ref={dropdown => refs[menuGroup[0]] = dropdown}>
                {menuGroup[1].map(item =>
                    <span key={item}>{item}</span>
                )}
            </div>
        </div>
    );

    return (
        <div className="menu">
            {menuButtons}
        </div>
    );
}
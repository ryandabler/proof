import React from "react";

import { toggleMenu, hideMenu, showMenu } from "../utilities";
import { menuItems } from "../config";

import "./menu.css";

export default function Menu() {
    const refs = {};

    function onMouseEnter(e) {
        const menuDisplayed = document.querySelector(".menu-group .menu-dropdown:not(.hidden)");
        if (menuDisplayed) {
            hideMenu(menuDisplayed);
            const newMenuElem = e.target.nextSibling;
            showMenu(newMenuElem);
        }
    }

    const menuButtons = menuItems.map(menuGroup => 
        <div key={menuGroup[0]} className="menu-group" onMouseEnter={onMouseEnter}>
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
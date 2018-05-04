import React from "react";

import "./menu.css";

export default function Menu() {
    const menuItems = {
        "File": 
            <div className="menu-dropdown">
                <span>New Project</span>
                <span>Open Project</span>
                <span>Export...</span>
                <span>Import...</span>
            </div>,
        "View":
            <div className="menu-dropdown">
                <span>Preview</span>
                <span>Header/Footer</span>
            </div>,
        "Edit":
            <div className="menu-dropdown">
                <span>Insert character</span>
            </div>,
        "Settings":
            <div className="menu-dropdown">
                <span>Parser</span>
                <span>Preferences</span>
            </div>,
        "Project":
            <div className="menu-dropdown">
                <span>Add image</span>
                <span>Edit details</span>
                <span>Delete</span>
                <span>Push</span>
                <span>Pull</span>
            </div>,
        "About":
            <div className="menu-dropdown">
                <span>Help</span>
                <span>About</span>
            </div>
    };

    return (
        <div className="menu">
            <button className="menu-item">File {menuItems["File"]}</button>
            <button className="menu-item">View {menuItems["View"]}</button>
            <button className="menu-item">Edit {menuItems["Edit"]}</button>
            <button className="menu-item">Settings {menuItems["Settings"]}</button>
            <button className="menu-item">Project {menuItems["Project"]}</button>
            <button className="menu-item">About {menuItems["About"]}</button>
        </div>
    );
}
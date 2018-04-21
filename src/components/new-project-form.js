import React from "react";

import "./new-project-form.css";

export default function NewProjectForm(props) {
    return (
        <form className="new-project-form">
            <label htmlFor="project-title">Title</label>
            <input type="text" id="project-title" name="title" />
        </form>
    );
}
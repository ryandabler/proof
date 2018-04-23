import React from "react";

import "./new-project-form.css";

export default function NewProjectForm(props) {
    return (
        <form className="new-project-form">
            <label htmlFor="project-title">Name</label>
            <input type="text" id="project-title" name="title" required />
            <label htmlFor="project-remote-index">Remote index</label>
            <input type="text" id="project-remote-index" name="remote" />
            <label htmlFor="project-file">File (PDF)</label>
            <input type="file" id="project-file" name="file" />
            <input type="submit" value="Save" />
        </form>
    );
}
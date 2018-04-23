import React from "react";

import { extractFormValues } from "../utilities";

import "./new-project-form.css";

export default function NewProjectForm(props) {
    function submitHandler(e) {
        e.preventDefault();
        const formValues = extractFormValues(e.target.elements);
        
        if (formValues.file !== "") {
            const input = e.target.elements.file;
            const file = input.files[0];
            const fileReader = new FileReader();
            let base64;

            fileReader.onload = (loadEvent) => {
                base64 = loadEvent.target.result;
            }
            
            fileReader.readAsDataURL(file);
        }
    }

    return (
        <form onSubmit={submitHandler} className="new-project-form">
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
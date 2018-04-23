import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import { extractFormValues } from "../utilities";
import { addToDB } from "../indexeddb";
import { createProject } from "../actions";

import "./new-project-form.css";

export function NewProjectForm(props) {
    function submitHandler(e) {
        e.preventDefault();
        const formValues = extractFormValues(e.target.elements);
        const { name, remote, file } = formValues;
        addToDB({ name, remote }, "projects");
        props.dispatch(createProject({ name, remote }));

        if (file !== "") {
            const input = e.target.elements.file;
            const file = input.files[0];
            const fileReader = new FileReader();
            let base64;

            fileReader.onload = (loadEvent) => {
                base64 = loadEvent.target.result;
                addToDB({ project: name, file: base64 }, "project-files");
            }

            fileReader.readAsDataURL(file);
        }

        props.history.push("./");
    }

    return (
        <form onSubmit={submitHandler} className="new-project-form">
            <label htmlFor="project-name">Name</label>
            <input type="text" id="project-name" name="name" required />
            <label htmlFor="project-remote-index">Remote index</label>
            <input type="text" id="project-remote-index" name="remote" />
            <label htmlFor="project-file">File (PDF)</label>
            <input type="file" id="project-file" name="file" />
            <input type="submit" value="Save" />
        </form>
    );
}

NewProjectForm.propTypes = {
    history: PropTypes.object,
    dispatch: PropTypes.func
}

export default connect()(NewProjectForm);
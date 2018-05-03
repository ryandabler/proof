import React from "react";
import { PropTypes } from "prop-types";

import "./text-box.css";

export default function TextBox(props) {
    const text = props.page ? props.page.text : "";
    return (
        <textarea className="text-box" defaultValue={text} onInput={(e) => props.onInput(e.target.value)} />
    );
}

TextBox.propTypes = {
    onInput: PropTypes.func,
    page: PropTypes.object
};
import React from "react";
import { connect } from "react-redux";

import { loadFile } from "../actions";

import "./image-zone.css";

export function ImageZone(props) {
    function loadFile(e) {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.onload = (loadEvent) => {
          const base64 = loadEvent.target.result;
          props.loadFile(base64);
        }
        fileReader.readAsDataURL(file);
    }

    return (
        <input type="file" onChange={(e) => loadFile(e)} />
    );
}

const mapDispatchToProps = dispatch => ({
    loadFile: dataURL => dispatch(loadFile(dataURL))
});

export default connect(null, mapDispatchToProps)(ImageZone);
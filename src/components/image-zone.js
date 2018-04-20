import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

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

ImageZone.propTypes = {
    file: PropTypes.string
};

const mapStateToProps = state => ({
    file: state.file
});

const mapDispatchToProps = dispatch => ({
    loadFile: dataURL => dispatch(loadFile(dataURL))
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageZone);
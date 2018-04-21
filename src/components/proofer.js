import React from "react";
import { connect } from "react-redux";

import TextBox from "./text-box";
import ImageZone from "./image-zone";

import "./proofer.css";

export function Proofer(props) {
    return (
        <div className="proofer">
            <TextBox />
            <ImageZone />
        </div>
    );
}

const mapStateToProps = state => ({
    projects: state.projects
});

export default connect(mapStateToProps)(Proofer);
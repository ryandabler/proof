import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

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

Proofer.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => ({
    projects: state.projects
});

export default connect(mapStateToProps)(Proofer);
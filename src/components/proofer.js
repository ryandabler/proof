import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

import TextBox from "./text-box";
import ImageZone from "./image-zone";

import "./proofer.css";

export function Proofer(props) {
    if (props.projects.length > 0) {
        return (
            <div className="proofer">
                <TextBox />
                <ImageZone />
            </div>
        );
    } else {
        return (
            <Link to={"/new"}>
                <div>Create a new Project</div>
            </Link>
        );
    }
}

Proofer.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => ({
    projects: state.projects
});

export default connect(mapStateToProps)(Proofer);
import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

import "./landing-page.css";

export function LandingPage(props) {
    if (props.projects.length > 0) {
        return (
            <div>PROJECTS</div>
        );
    } else {
        return (
            <Link to={"/new"} className="plain-link">
                <div className="new-project-ind">Create a new Project</div>
            </Link>
        );
    }
}

LandingPage.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => ({
    projects: state.projects
});

export default connect(mapStateToProps)(LandingPage);
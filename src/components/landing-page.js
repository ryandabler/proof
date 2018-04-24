import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

import ProjectOverview from "./project-overview";

import "./landing-page.css";

export function LandingPage(props) {
    const projectTiles = props.projects.map(project => 
        <ProjectOverview key={project.name} name={project.name} pctComplete={0} />
    );

    return (
        <div className="landing-page">
            {projectTiles}
            <Link to={"/new"} className="plain-link project-overview" id="new-project">
                New Project
            </Link>
        </div>
    );
}

LandingPage.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => ({
    projects: state.projects
});

export default connect(mapStateToProps)(LandingPage);
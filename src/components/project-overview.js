import React from "react";
import { connect } from "react-redux";

import "./project-overview.css";

export function ProjectOverview(props) {

const mapStateToProps = (state, props) => ({
    project: state.projects.filter(project =>
        project.name === props.match.params.id
    )
});

export default connect(mapStateToProps)(ProjectOverview);
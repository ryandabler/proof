import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

import "./project-overview.css";

export default function ProjectOverview(props) {
    return (
        <Link to={`/projects/${props.name}`} className="plain-link project-overview">
            <span className="project-name">{props.name}</span>
            <span className="pct">{props.pctComplete}%</span>
        </Link>
    );
}

ProjectOverview.propTypes = {
    name: PropTypes.string,
    pctComplete: PropTypes.number
}
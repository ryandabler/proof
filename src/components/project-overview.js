import React from "react";
import { PropTypes } from "prop-types";

import "./project-overview.css";

export default function ProjectOverview(props) {
    return (
        <div className="project-overview">
            <span>{props.name}</span>
            <span>{props.pctComplete}</span>
        </div>
    );
}

ProjectOverview.propTypes = {
    name: PropTypes.string,
    pctComplete: PropTypes.number
}
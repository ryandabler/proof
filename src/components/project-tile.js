import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

import "./project-tile.css";

export default function ProjectTile(props) {
    return (
        <Link to={`/projects/${props.name}`} className="plain-link project-tile">
            <span className="project-name">{props.name}</span>
            <span className="pct">{props.pctComplete}%</span>
        </Link>
    );
}

ProjectTile.propTypes = {
    name: PropTypes.string,
    pctComplete: PropTypes.number
}
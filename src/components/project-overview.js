import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import "./project-overview.css";

export class ProjectOverview extends React.Component {
    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        return (
            <div className="project-overview">
                <span>Name</span>
                <span>{this.props.project.name}</span>
                <span>Remote</span>
                <span>{this.props.project.remote}</span>
                <span>Pagelist</span>
                <span></span>
            </div>
        );
    }
}

ProjectOverview.propTypes = {
    project: PropTypes.object
};

const mapStateToProps = (state, props) => ({
    project: state.projects.find(project =>
        project.name === props.match.params.id
    )
});

export default connect(mapStateToProps)(ProjectOverview);
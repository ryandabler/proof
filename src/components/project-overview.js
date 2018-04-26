import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import { getAllFromDB } from "../indexeddb";
import { loadProjectPages } from "../actions";

import "./project-overview.css";

export class ProjectOverview extends React.Component {
    constructor(props) {
        super();
        this.props = props;
    }

    componentDidMount() {
		getAllFromDB("pages", this.props.loadPagesOfProject(this.props.project));
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
    project: PropTypes.object,
    loadPagesOfProject: PropTypes.func
};

const mapStateToProps = (state, props) => ({
    project: state.projects.find(project =>
        project.name === props.match.params.id
    ),
    pages: state.pages
});

const mapDispatchToProps = dispatch => ({
    loadPagesOfProject: (projectId) => data => {
        const filtered = data.filter(item =>
            item.id.split("__").slice(0, -1) === projectId
        );

        dispatch(loadProjectPages(filtered));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectOverview);
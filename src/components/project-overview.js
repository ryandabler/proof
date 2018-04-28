import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

import ImageZone from "./image-zone";
import { getAllFromDB, getFromDB } from "../indexeddb";
import { loadProjectPages, loadProjectFile, setPageCount } from "../actions";

import "./project-overview.css";

export class ProjectOverview extends React.Component {
    constructor(props) {
        super();
        this.props = props;
    }

    componentDidMount() {
        getAllFromDB("pages", this.props.loadPagesOfProject(this.props.project.name));
        getFromDB(this.props.project.name, "project-files", this.props.loadProjectFile);
    }
    
    generatePageList() {
        const pageList = [];
        for (let n = 0; n < this.props.pageCount; n++) {
            pageList.push(
                <Link key={n} to={`${this.props.match.url}/${n}`} className="plain-link">
                    {n}
                </Link>
            );
        }
        
        return pageList;
    }

    render() {
        return (
            <div className="project-overview">
                <span>Name</span>
                <span>{this.props.project.name}</span>
                <span>Remote</span>
                <span>{this.props.project.remote}</span>
                <span>Pagelist</span>
                <span>{this.generatePageList()}</span>
                <ImageZone file={this.props.file} pageIndex={0} success={this.props.setPageCount} />
            </div>
        );
    }
}

ProjectOverview.propTypes = {
    project: PropTypes.object,
    loadPagesOfProject: PropTypes.func,
    loadProjectFile: PropTypes.func,
    file: PropTypes.string,
    setPageCount: PropTypes.func
};

const mapStateToProps = (state, props) => ({
    project: state.projects.find(project =>
        project.name === props.match.params.id
    ),
    pages: state.pages,
    file: state.file,
    pageCount: state.pageCount
});

const mapDispatchToProps = dispatch => ({
    loadPagesOfProject: projectId => data => {
        const filtered = data.filter(item =>
            item.id.split("__").slice(0, -1) === projectId
        );

        dispatch(loadProjectPages(filtered));
    },

    loadProjectFile: data => {
        dispatch(loadProjectFile(data.file));
    },

    setPageCount: pdfDocProxy => {
        dispatch(setPageCount(pdfDocProxy.numPages));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectOverview);
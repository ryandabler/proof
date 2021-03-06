import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

import ImageZone from "./image-zone";
import { getFromDBViaIndex, getFromDB } from "../indexeddb";
import { loadProjectPages, loadProjectFile, setPageCount } from "../actions";

import "./project-overview.css";

export class ProjectOverview extends React.Component {
    constructor(props) {
        super();
        this.props = props;
    }

    componentDidMount() {
        const { name } = this.props.project;
        getFromDBViaIndex("pages", "ProjectIndex", name, this.props.loadPagesOfProject);
        getFromDB(name, "project-files", this.props.loadProjectFile);
    }
    
    generatePageList() {
        const pageList = [];
        for (let n = 0; n < this.props.pageCount; n++) {
            const page = this.props.pages.find(page => page.number === n);
            const status = page ? page.status : "not-proofread";

            pageList.push(
                <Link key={n} to={`${this.props.match.url}/${n}`} className={`plain-link page-list-item ${status}`}>
                    {n}
                </Link>
            );
        }
        
        return pageList;
    }

    render() {
        return (
            <div className="project-overview">
                <div className="project-data">
                    <span>Name</span>
                    <span>{this.props.project.name}</span>
                    <span>Remote</span>
                    <span>{this.props.project.remote}</span>
                    <span className="all-columns">Pagelist</span>
                    <span className="page-list all-columns">{this.generatePageList()}</span>
                </div>
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
    setPageCount: PropTypes.func,
    pageCount: PropTypes.number,
    pages: PropTypes.array,
    match: PropTypes.object
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
    loadPagesOfProject: data => {
        dispatch(loadProjectPages(data));
    },

    loadProjectFile: data => {
        dispatch(loadProjectFile(data.file));
    },

    setPageCount: pdfDocProxy => {
        dispatch(setPageCount(pdfDocProxy.numPages));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectOverview);
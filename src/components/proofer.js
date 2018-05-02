import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import TextBox from "./text-box";
import ImageZone from "./image-zone";

import "./proofer.css";

export function Proofer(props) {
    return (
        <div className="proofer">
            <TextBox />
            <ImageZone file={props.file} pageIndex={props.pageNum} />
        </div>
    );
}

Proofer.propTypes = {
    project: PropTypes.object,
    pageNum: PropTypes.number,
    file: PropTypes.string
};

const mapStateToProps = (state, props) => ({
    project: state.projects.find(project =>
        project.name === props.match.params.id
    ),
    pageNum: parseInt(props.match.params.page, 10),
    file: state.file
});

export default connect(mapStateToProps)(Proofer);
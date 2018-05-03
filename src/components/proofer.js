import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import TextBox from "./text-box";
import ImageZone from "./image-zone";
import { setPage } from "../actions";
import { updateRecordInDB } from "../indexeddb";

import "./proofer.css";

export function Proofer(props) {
    function inputHandler(data) {
        console.log(data);
    }

    return (
        <div className="proofer">
            <TextBox page={props.page} onInput={inputHandler} />
            <ImageZone file={props.file} pageIndex={props.pageNum} />
        </div>
    );
}

Proofer.propTypes = {
    project: PropTypes.object,
    pageNum: PropTypes.number,
    file: PropTypes.string,
    page: PropTypes.object,
    setPage: PropTypes.func
};

const mapStateToProps = (state, props) => ({
    project: state.projects.find(project =>
        project.name === props.match.params.id
    ),
    pageNum: parseInt(props.match.params.page, 10),
    file: state.file,
    page: state.pages.find(page =>
        page.page === props.match.params.page
    )
});

const mapDispatchToProps = (dispatch, props) => ({
    setPage: text => {
        const newPage = props.page
            ? Object.assign({}, props.page, { text })
            : { project: props.match.params.id, page: props.match.params.page, text };
        updateRecordInDB(newPage, "pages");
        dispatch(setPage(props.pageNum, text))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Proofer);
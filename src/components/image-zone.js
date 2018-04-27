import React from "react";
import { PropTypes } from "prop-types";
import { Document, Page } from "react-pdf";

import "./image-zone.css";

export default function ImageZone(props) {
    return (
        <Document file={props.file} onLoadSuccess={props.success}>
            <Page pageIndex={props.pageIndex} />
        </Document>
    );
}

ImageZone.propTypes = {
    file: PropTypes.string,
    pageIndex: PropTypes.number,
    success: PropTypes.func
};
import React from "react";
import { PropTypes } from "prop-types";
import { Document, Page } from "react-pdf";

import "./image-zone.css";

export default function ImageZone(props) {
    if (props.file === null) {
        return (
            <input type="file" />
        );
    } else {
        return (
            <Document file={props.file}>
                <Page pageIndex={props.pageIndex} />
            </Document>
        );
    }
}

ImageZone.propTypes = {
    file: PropTypes.string,
    pageIndex: PropTypes.number
};
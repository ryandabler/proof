import React from "react";

import TextBox from "./text-box";
import ImageZone from "./image-zone";

import "./proofer.css";

export default function Proofer(props) {
    return (
        <div className="proofer">
            <TextBox />
            <ImageZone />
        </div>
    );
}
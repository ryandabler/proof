import React from "react";
import { connect } from "react-redux";

import "./image-zone.css";

export function ImageZone(props) {
    function loadFile(e) {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.onload = (loadEvent) => {
          const base64 = loadEvent.target.result;
          this.setState({file: base64});
        }
        fileReader.readAsDataURL(file);
    }

    return (
        <input type="file" onChange={(e) => loadFile(e)} />
    );
}

export default connect()(ImageZone);
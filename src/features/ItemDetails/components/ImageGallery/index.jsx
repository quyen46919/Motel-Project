import * as React from "react";
import { Example } from "./Example";

import "./styles.scss";

export default function ImageGallery (props) {
  return (
    <div className="example-container">
      <Example imageList={props?.imageList}/>
    </div>
  )
};
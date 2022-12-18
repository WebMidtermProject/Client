import React from "react";

import Overlay from "../overlay/Overlay";

import "./css/Loading.css";

const Loading = (props) => {
  return (
    <Overlay>
      <div className="loader">
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>
    </Overlay>
  );
};

export default Loading;

import React from "react";

import Overlay from "../overlay/Overlay";

import "./css/Loading.css";

const Loading = (props) => {
  return (
    <Overlay>
      <div class="loader">
        <div class="inner one"></div>
        <div class="inner two"></div>
        <div class="inner three"></div>
      </div>
    </Overlay>
  );
};

export default Loading;

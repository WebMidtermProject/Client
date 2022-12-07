import React from "react";

import Slide from "./Slide";

import "./css/DisplaySlide.css";

const DisplaySlide = (props) => {
  return (
    <div className="display-slide">
      <Slide width="1100px" height="550px"></Slide>
    </div>
  );
};

export default DisplaySlide;

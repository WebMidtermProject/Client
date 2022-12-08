import React from "react";

import Slide from "./Slide";

import "./css/DisplaySlide.css";

const DisplaySlide = (props) => {
  return (
    <div className="display-slide">
      <Slide size="large"></Slide>
    </div>
  );
};

export default DisplaySlide;
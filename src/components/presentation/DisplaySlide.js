import React from "react";

import Slide from "../slide/Slide";

import "./css/DisplaySlide.css";

const DisplaySlide = (props) => {
  return (
    <div className="display-slide">
      <Slide size="large" ownerMode={false}></Slide>
    </div>
  );
};

export default DisplaySlide;

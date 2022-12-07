import React from "react";

import Slide from "./Slide";

import "./css/ScrollSlides.css";

const ScrollSlides = () => {
  return (
    <div className="scroll-slides">
      <ul className="scroll-slides__list">
        <li className="scroll-slides__item">
          <Slide width="200px" height="100px"></Slide>
        </li>
        <li className="scroll-slides__item last-item">
          <span>+</span>
        </li>
      </ul>
    </div>
  );
};

export default ScrollSlides;

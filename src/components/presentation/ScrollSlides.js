import React from "react";

import Slide from "./Slide";

import "./css/ScrollSlides.css";

const ScrollSlides = (props) => {
  const handleCreateSlide = (e) => {
    console.log(e);
  };

  const handleChooseSlide = (e) => {
    props.setSlide("ID");
  };

  return (
    <div className="scroll-slides">
      <ul className="scroll-slides__list">
        <li className="scroll-slides__item" onClick={handleChooseSlide}>
          <Slide size="mini"></Slide>
        </li>
        <li className="scroll-slides__item" onClick={handleChooseSlide}>
          <Slide size="mini"></Slide>
        </li>
        <li className="scroll-slides__item" onClick={handleChooseSlide}>
          <Slide size="mini"></Slide>
        </li>
        <li className="scroll-slides__item" onClick={handleChooseSlide}>
          <Slide size="mini"></Slide>
        </li>
        <li className="scroll-slides__item" onClick={handleChooseSlide}>
          <Slide size="mini"></Slide>
        </li>
        <li className="scroll-slides__item" onClick={handleChooseSlide}>
          <Slide size="mini"></Slide>
        </li>
        <li className="scroll-slides__item" onClick={handleChooseSlide}>
          <Slide size="mini"></Slide>
        </li>
        <li className="scroll-slides__item" onClick={handleCreateSlide}>
          <Slide size="mini" className="last-slide"></Slide>
        </li>
      </ul>
    </div>
  );
};

export default ScrollSlides;

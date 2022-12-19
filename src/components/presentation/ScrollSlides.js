import { React, useState, useEffect } from "react";

import Slide from "../slide/Slide";

import "./css/ScrollSlides.css";

const ScrollSlides = (props) => {
  const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [currentChoice, setCurrentChoice] = useState(0);
  const handleCreateSlide = (e) => {
    console.log(e);
  };

  const handleChooseSlide = (key) => {
    setCurrentChoice(key);
    props.setSlide(key);
  };

  return (
    <div className="scroll-slides">
      <ul className="scroll-slides__list">
        {slides.map((key) => {
          let cls = "scroll-slides__item";
          if (key === currentChoice) cls += " selected";
          return (
            <li
              className={cls}
              key={key}
              onClick={() => {
                handleChooseSlide(key);
              }}
            >
              <Slide size="mini"></Slide>
            </li>
          );
        })}
        <li className="scroll-slides__item" onClick={handleCreateSlide}>
          <Slide size="mini" className="last-slide"></Slide>
        </li>
      </ul>
    </div>
  );
};

export default ScrollSlides;

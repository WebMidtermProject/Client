import { React, useState, useEffect } from "react";

import MultipleChoiceSlide from "../slide/MultipleChoiceSlide";

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
              <MultipleChoiceSlide type="sm"></MultipleChoiceSlide>
            </li>
          );
        })}
        <li className="scroll-slides__item" onClick={handleCreateSlide}>
          <MultipleChoiceSlide
            type="sm"
            className="last-slide"
          ></MultipleChoiceSlide>
        </li>
      </ul>
    </div>
  );
};

export default ScrollSlides;

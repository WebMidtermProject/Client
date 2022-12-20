import { React, useState, useEffect } from "react";
import { motion } from "framer-motion";

import MultipleChoiceSlide from "../slide/MultipleChoiceSlide";

import "./css/ScrollSlides.css";

const ScrollSlides = (props) => {
  const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [currentChoice, setCurrentChoice] = useState(1);

  const handleCreateSlide = (e) => {
    console.log(e);
  };

  const handleChooseSlide = (slide) => {
    setCurrentChoice(slide);
    props.setSlide(slide);
  };

  return (
    <div className="scroll-slide">
      <ul className="scroll-slide__list">
        {slides.map((slide, key) => {
          return (
            <li
              key={slide}
              className={
                slide === currentChoice
                  ? "scroll-slide__item selected"
                  : "scroll-slide__item"
              }
              onClick={() => {
                handleChooseSlide(slide);
              }}
            >
              <MultipleChoiceSlide type="sm"></MultipleChoiceSlide>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ScrollSlides;

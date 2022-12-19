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
    <div className="scroll-slide">
      <ul
        className="scroll-slide__list"
        style={{ display: "flex", gap: "30px" }}
      >
        <li className="scroll-slide__item">
          <MultipleChoiceSlide type="sm"></MultipleChoiceSlide>
        </li>
        <li className="scroll-slide__item">
          <MultipleChoiceSlide type="sm"></MultipleChoiceSlide>
        </li>
        <li className="scroll-slide__item">
          <MultipleChoiceSlide type="sm"></MultipleChoiceSlide>
        </li>
        <li className="scroll-slide__item">
          <MultipleChoiceSlide type="sm"></MultipleChoiceSlide>
        </li>
      </ul>
    </div>
  );
};

export default ScrollSlides;

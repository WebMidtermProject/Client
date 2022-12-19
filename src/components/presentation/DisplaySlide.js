import React from "react";

import MultipleChoiceSlide from "../slide/MultipleChoiceSlide";

import "./css/DisplaySlide.css";

const DisplaySlide = (props) => {
  return (
    <div className="display-slide">
      <MultipleChoiceSlide size="large" ownerMode={false}></MultipleChoiceSlide>
    </div>
  );
};

export default DisplaySlide;

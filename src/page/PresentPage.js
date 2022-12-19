import React from "react";

import MultipleChoiceSlide from "../components/slide/MultipleChoiceSlide";
import "./css/PresentPage.css";

const PresentPage = (props) => {
  return (
    <div className="page--present">
      <MultipleChoiceSlide type="full"></MultipleChoiceSlide>
    </div>
  );
};

export default PresentPage;

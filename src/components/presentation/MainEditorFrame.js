import React from "react";

import MultipleChoiceSlide from "../slide/MultipleChoiceSlide";

import "./css/MainEditorFrame.css";

const MainEditorFrame = (props) => {
  return (
    <div className="main-editor-frame">
      <MultipleChoiceSlide type="md"></MultipleChoiceSlide>
    </div>
  );
};

export default MainEditorFrame;

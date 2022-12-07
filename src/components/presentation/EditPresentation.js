import React from "react";

import TaskBar from "./TaskBar";
import ScrollSlides from "./ScrollSlides";
import DisplaySlide from "./DisplaySlide";
import SlideCustomization from "./SlideCustomization";

import "./css/EditPresentation.css";

const EditPresentation = (props) => {
  return (
    <>
      <TaskBar></TaskBar>
      <div className="edit-presentation">
        <div className="edit-presentation--left">
          <SlideCustomization></SlideCustomization>
        </div>
        <div className="edit-presentation--right">
          <DisplaySlide></DisplaySlide>
          <ScrollSlides></ScrollSlides>
        </div>
      </div>
    </>
  );
};
export default EditPresentation;

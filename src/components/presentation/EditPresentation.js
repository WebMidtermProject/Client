import { React, useState, useEffect } from "react";

import TaskBar from "./TaskBar";
import ScrollSlides from "./ScrollSlides";
import DisplaySlide from "./DisplaySlide";
import SlideCustomization from "./SlideCustomization";

import "./css/EditPresentation.css";

const EditPresentation = (props) => {
  const [slideID, setSlideID] = useState();
  const setCurrentSlide = (slideId) => {
    console.log(slideId);
  };
  return (
    <>
      <TaskBar></TaskBar>
      <div className="edit-presentation">
        <div className="edit-presentation--left">
          <SlideCustomization slide={slideID}></SlideCustomization>
        </div>
        <div className="edit-presentation--right">
          <DisplaySlide slide={slideID}></DisplaySlide>
          <ScrollSlides setSlide={setCurrentSlide}></ScrollSlides>
        </div>
      </div>
    </>
  );
};
export default EditPresentation;

import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import TaskBar from "./TaskBar";
import ScrollSlides from "./ScrollSlides";
import DisplaySlide from "./DisplaySlide";
import SlideCustomization from "./SlideCustomization";

import "./css/EditPresentation.css";

const EditPresentation = (props) => {
  const { groupId, presentationId } = useParams();
  const [currentSlide, setCurrentSlide] = useState();

  const setDisplaySlide = (slideId) => {
    console.log(slideId);
    setCurrentSlide(slideId);
    /* fetch slide by slideID to display */
  };

  return (
    <>
      <TaskBar groupId={groupId} presentationId={presentationId}></TaskBar>
      <div className="edit-presentation">
        <div className="edit-presentation--left">
          <SlideCustomization slide={currentSlide}></SlideCustomization>
        </div>
        <div className="edit-presentation--right">
          <DisplaySlide slide={currentSlide}></DisplaySlide>
          <ScrollSlides setSlide={setDisplaySlide}></ScrollSlides>
        </div>
      </div>
    </>
  );
};
export default EditPresentation;

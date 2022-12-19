import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import TaskBar from "../presentation/TaskBar";
import ScrollSlides from "../presentation/ScrollSlides";
import DisplaySlide from "../presentation/DisplaySlide";
import SlideCustomization from "../presentation/SlideCustomization";
import Loading from "../loading/Loading";

import "./css/EditorPage.css";

const EditPresentation = (props) => {
  const { presentationId } = useParams();
  const [currentSlide, setCurrentSlide] = useState();

  const [loading, setLoading] = useState(false);

  const setDisplaySlide = (slideId) => {
    console.log(slideId);
    setCurrentSlide(slideId);
    /* fetch slide by slideID to display */
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, Math.floor(Math.random() * 1000) + 500);
  }, []);

  return (
    <>
      <TaskBar
        /* groupId={groupId} */ presentationId={presentationId}
      ></TaskBar>
      <div className="edit-presentation">
        <div className="edit-presentation--left">
          <SlideCustomization slide={currentSlide}></SlideCustomization>
        </div>
        <div className="edit-presentation--right">
          <DisplaySlide slide={currentSlide}></DisplaySlide>
          <ScrollSlides setSlide={setDisplaySlide}></ScrollSlides>
        </div>
      </div>
      {loading && <Loading></Loading>}
    </>
  );
};
export default EditPresentation;

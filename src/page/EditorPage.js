import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import EditorHeader from "../components/header/EditorHeader";
import ScrollSlides from "../components/presentation/ScrollSlides";
import MainEditorFrame from "../components/presentation/MainEditorFrame";
import SlideCustomization from "../components/presentation/SlideCustomization";
import Loading from "../components/loading/Loading";

import "./css/EditorPage.css";

const EditorPage = (props) => {
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
    <div className="page page--editor-page">
      <EditorHeader presentationId={presentationId}></EditorHeader>

      <div className="edit-presentation">
        <div className="edit-presentation--left">
          <SlideCustomization slide={currentSlide}></SlideCustomization>
        </div>
        <div className="edit-presentation--right">
          <MainEditorFrame slide={currentSlide}></MainEditorFrame>
          {/*           <ScrollSlides></ScrollSlides> */}
        </div>
      </div>
      {loading && <Loading></Loading>}
    </div>
  );
};
export default EditorPage;

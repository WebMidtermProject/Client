import { React, useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import EditorHeader from "../components/header/EditorHeader";
import ScrollSlides from "../components/presentation/ScrollSlides";
import MainEditorFrame from "../components/presentation/MainEditorFrame";
import SlideConfig from "../components/presentation/SlideConfig";
import Loading from "../components/loading/Loading";

import "./css/EditorPage.css";

const EditorPage = (props) => {
  const { presentationId } = useParams();
  const [currentSlide, setCurrentSlide] = useState();
  const [backgroundColor, setbackgroundColor] = useState("#ffffff");
  const [questionColor, setQuestionColor] = useState("#212529");

  const [loading, setLoading] = useState(false);

  const setDisplaySlide = (slideId) => {
    console.log(slideId);
    setCurrentSlide(slideId);
    console.log(slideId);
    /* fetch slide by slideID to display */
  };

  const changeBackgroundColor = (color) => {
    console.log(color);
    setbackgroundColor(color);
  };

  const changeQuestionColor = (color) => {
    setQuestionColor(color);
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
          <SlideConfig
            slide={currentSlide}
            changeBgColor={changeBackgroundColor}
            changeQuestionColor={changeQuestionColor}
          ></SlideConfig>
        </div>
        <div className="edit-presentation--right">
          <MainEditorFrame
            slide={currentSlide}
            bgColor={backgroundColor}
            questionColor={questionColor}
          ></MainEditorFrame>
          <ScrollSlides setSlide={setDisplaySlide}></ScrollSlides>
        </div>
      </div>
      {loading && <Loading></Loading>}
    </div>
  );
};
export default EditorPage;

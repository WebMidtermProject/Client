import React from "react";
import { motion } from "framer-motion";

import RadioAnswer from "./RadioAnswer";

import "./css/Slide.css";
import "./css/MultipleChoiceSlide.css";

const MultipleChoiceSlide = (props) => {
  const answers = [];
  let fontSize = 96;

  if (props.type === "md") {
    fontSize = 96;
  } else if (props.type === "sm") {
    fontSize = 12;
  }

  const cls = props.type;

  return (
    <motion.div
      className={"slide " + cls}
      style={{ fontSize: fontSize + "px", backgroundColor: props.bgColor }}
    >
      <div className="slide-header">
        <h3 className="slide__question" style={{ color: props.questionColor }}>
          Question ?
        </h3>
      </div>
      <div
        className="slide-answer"
        style={{ fontSize: Math.floor(fontSize * 0.4) + "px" }}
      >
        <RadioAnswer answers={answers}></RadioAnswer>
      </div>
    </motion.div>
  );
};

export default MultipleChoiceSlide;

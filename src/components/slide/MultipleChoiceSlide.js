import React from "react";
import { motion } from "framer-motion";

import RadioAnswer from "./RadioAnswer";

import "./css/Slide.css";
import "./css/MultipleChoiceSlide.css";

const MultipleChoiceSlide = (props) => {
  const answers = [];
  let scale = 1;

  if (props.type === "md") {
    scale = 1;
  } else if (props.type === "sm") {
    scale = 0.1;
  }

  const cls = props.type;

  return (
    <motion.div className={"slide " + cls} initial={{ scale: scale }}>
      <div className="slide-header">
        <h3 className="slide__question">Question ?</h3>
      </div>
      <div className="slide-answer">
        <RadioAnswer answers={answers} fontSize={36}></RadioAnswer>
      </div>
    </motion.div>
  );
};

export default MultipleChoiceSlide;

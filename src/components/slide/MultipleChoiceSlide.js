import React from "react";
import { motion } from "framer-motion";

import RadioAnswer from "./RadioAnswer";

import "./css/MultipleChoiceSlide.css";

const MultipleChoiceSlide = (props) => {
  const answers = [];
  let scale = 1;
  let width = "100%";

  if (props.type === "md") {
    scale = 0.6;
    width = "70%";
  } else if (props.type === "sm") {
    scale = 0.1;
    width = "70%";
  }

  const cls = props.type;

  return (
    <motion.div
      className={"slide " + cls}
      initial={{ scale: scale, width: width }}
    >
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

import React from "react";
import { motion } from "framer-motion";

import RadioAnswer from "./RadioAnswer";
import "./css/MultipleChoiceSlide.css";
const MultipleChoiceSlide = (props) => {
  const answers = [];
  return (
    <motion.div
      className="slide"
      initial={{ scale: props.size === "lg" ? 1 : 0.35 }}
    >
      <div className="slide-header">
        <h3 className="slide__title">Question ?</h3>
      </div>
      <div className="slide-content">
        <RadioAnswer answers={answers}></RadioAnswer>
      </div>
    </motion.div>
  );
};

export default MultipleChoiceSlide;

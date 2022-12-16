import React from "react";
import { motion } from "framer-motion";

import "./css/Button.css";
import "./css/MonoButton.css";

const MonoButton = (props) => {
  return (
    <motion.button
      onClick={props.onClick}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
      type={props.submit ? "submit" : "button"}
      className={
        props.className ? "btn btn--mono " + props.className : "btn btn--mono"
      }
    >
      {props.name}
    </motion.button>
  );
};

export default MonoButton;

import React from "react";
import { motion } from "framer-motion";

import "./css/Button.css";
import "./css/GradientButton.css";

const GradientButton = (props) => {
  return (
    <>
      {props.type === "submit" && (
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
            /*             boxShadow: "0.5px 0.5px 25px var(--secondary-purple-color)", */
          }}
          transition={{ type: "spring", stiffness: 1500, damping: 10 }}
          type="submit"
          className={
            props.className
              ? "btn btn--gradient " + props.className
              : "btn btn--gradient"
          }
          onClick={props.onClick}
        >
          {props.name}
        </motion.button>
      )}
    </>
  );
};

export default GradientButton;

import React from "react";
import { motion } from "framer-motion";

import "./css/Overlay.css";
const Overlay = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="overlay"
    >
      {props.children}
    </motion.div>
  );
};

export default Overlay;

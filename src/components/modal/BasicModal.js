import React from "react";
import { motion } from "framer-motion";

import "./css/BasicModal.css";

const BasicModal = (props) => {
  return (
    <div className="basic-modal">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="basic-modal-overlay"
      >
        <motion.div
          className="basic-modal-content"
          initial={{ scale: 0, translateX: "-50%", translateY: "-50%" }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.25 }}
          exit={{ scale: 0.5 }}
        >
          {props.children}
          <button
            className="basic-modal-content__close-btn"
            onClick={props.toggleModal}
          >
            X
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BasicModal;

import React from "react";
import { motion } from "framer-motion";

import Overlay from "../overlay/Overlay";
import "./css/BasicModal.css";

const BasicModal = (props) => {
  return (
    <div className="basic-modal">
      <Overlay>
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
      </Overlay>
    </div>
  );
};

export default BasicModal;

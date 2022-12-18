import React from "react";
import { motion } from "framer-motion";

const NavItem = (props) => {
  return (
    <motion.li
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.15, ease: "easeInOut" }}
      className={props.className ? "nav__item " + props.className : "nav__item"}
      onClick={props.onClick}
    >
      {props.children}
    </motion.li>
  );
};
export default NavItem;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./css/GroupItem.css";

const GroupItem = (props) => {
  return (
    <motion.li
      className="group__item"
      whileHover={{
        translateX: "10px",
        originX: 0,
        backgroundColor: "rgba(151, 151, 151, 0.123)",
      }}
      transition={{ duration: 0.15 }}
      key={props.key}
    >
      <Link className="group__item--link" to={`/group/${props.id}`}>
        <div className="group__item-head">
          <span className="group-name">{props.title}</span>
          <span className="group-num-member">{props.total_member}</span>
        </div>
        <div className="group__item-head">
          <span className="group-author">
            {props.owner_first_name} {props.owner_last_name}
          </span>
        </div>
      </Link>
    </motion.li>
  );
};

export default GroupItem;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./css/MemberItem.css";

const MemberItem = (props) => {
  return (
    <motion.li
      className="group__item"
      whileHover={{
        translateX: "20px",
        originX: 0,
        backgroundColor: "rgba(151, 151, 151, 0.123)",
      }}
      transition={{ duration: 0.15 }}
      key={props.key}
    >
      <Link className="member__item--link">
        {/*         <div className="group__item-head">
          <span className="group-name">{props.title}</span>
          <span className="group-num-member">{props.total_member}</span>
        </div>
        <div className="group__item-head">
          <span className="group-author">
            {props.owner_first_name} {props.owner_last_name}
          </span>
        </div> */}
        <li className="member__item" key="">
          <span className="member__name">
            {props?.first_name} {props?.last_name}
          </span>
          <select className="member__role">
            <option value="2" selected={props.role === 2 ? "selected" : ""}>
              CO_OWNER
            </option>
            <option value="3" selected={props.role === 3 ? "selected" : ""}>
              MEMBER
            </option>
            <option value="1" selected={props.role === 1 ? "selected" : ""}>
              OWNER
            </option>
            <option value="0" selected={props.role === 0 ? "selected" : ""}>
              KICK_OUT
            </option>
          </select>
        </li>
      </Link>
    </motion.li>
  );
};

export default MemberItem;

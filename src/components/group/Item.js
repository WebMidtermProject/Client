import React from "react";
import { useNavigate } from "react-router-dom";

import "./css/Item.css";

const GroupItem = (props) => {
  const navigate = useNavigate();
  const handleItemClick = (id) => {
    navigate(`/group/${id}`);
  };
  return (
    <li
      className="list__item"
      key={props.key}
      onClick={() => handleItemClick(props.id)}
    >
      <div className="list__item--left">
        <span className="group-name">{props.title}</span>
        <span className="group-num-member">{props.total_member}</span>
      </div>
      <span className="group-author">
        {props.owner_first_name} {props.owner_last_name}
      </span>
    </li>
  );
};

export default GroupItem;

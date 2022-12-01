import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "../css/GroupList.css";

const GroupList = (props) => {
  const navigate = useNavigate();

  const handleItemClick = (e) => {
    navigate("/group/1");
  };

  return (
    <Container className="section-group-list">
      <div className="div-group-list">
        <ul className="group-list">
          {props.title && <h5 className="group-list__title">{props.title}</h5>}
          <li className="group-list__item" onClick={handleItemClick}>
            <div className="group-list__item--left">
              <span className="group-name">Group A</span>
              <span className="group-num-member">0 member</span>
            </div>
            <span className="group-author">author1</span>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default GroupList;

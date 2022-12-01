import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "../css/GroupList.css";

const GroupList = (props) => {
  const navigate = useNavigate();
  console.log(props.data)
  console.log(typeof props.data)

  const handleItemClick = (id) => {
    navigate(`/group/${id}`);
  };

  return (
    <Container className="section-group-list">
      <div className="div-group-list">
        <ul className="group-list">
          {props.title && <h5 className="group-list__title">{props.title}</h5>}
          {
            typeof props.data === "object" ? 
            props.data.map((item, key) => {
              return (
                <li className="group-list__item" key={key} onClick={()=>handleItemClick(item.id)}>
                  <div className="group-list__item--left">
                    <span className="group-name">{item.title}</span>
                    <span className="group-num-member">{item.total_member}</span>
                  </div>
                  <span className="group-author">{item.owner_first_name} {item.owner_last_name}</span>
                </li>
              )
              
            }) : <></>
          }
          
        </ul>
      </div>
    </Container>
  );
};

export default GroupList;

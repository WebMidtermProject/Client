import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import MemberList from "./MemberList";

import "../css/GroupDetail.css";

const GroupDetail = (props) => {
  const { id } = useParams();
  //Get group detail from database
  //...
  ///
  return (
    <Container className="group__detail">
      <h4 className="group__detail__name">Group {id}</h4>
      <MemberList></MemberList>
    </Container>
  );
};

export default GroupDetail;

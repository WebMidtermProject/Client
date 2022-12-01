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

  const handleInviteByLink = (e) => {
    e.preventDefault();
    const inviteLink ="localhost:3000/invite/" + id;
    // Copy the text inside the text field
    navigator.clipboard.writeText(inviteLink);
    alert("Copied invite link to clipboard");
  }

  return (
    <Container className="group__detail">
      <h4 className="group__detail__name">Group {id}</h4>
      <MemberList></MemberList>
      <button className="btn-invite-link" onClick={handleInviteByLink}>Invite by link</button>
    </Container>
  );
};

export default GroupDetail;

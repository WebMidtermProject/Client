import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

import MemberList from "./MemberList";

import "../css/GroupDetail.css";

const GroupDetail = (props) => {
  const { id } = useParams();
  //Get group detail from database
  //...
  ///

  const groupDetailLink = "http://localhost:3000/group/";

  const [groupDetail, setGroupDetail] = useState(null);
  const [memberList, setMemberList] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    try {
      const inviteUser = async () => {
        const user = JSON.parse(localStorage.getItem("user"));
        const accessToken = user.accessToken;

        try {
          await fetch("http://localhost:3000/group/invite", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "api-token": accessToken,
            },
            body: JSON.stringify({ userID: user.id, groupID: id }),
          });
          alert(`Joined to group #${id}`);
        } catch (error) {
          console.log(error.message);
        }
      };
      if (props.invite) inviteUser();

      let api = groupDetailLink + id;
      const getData = async () => {
        var userJson = JSON.parse(localStorage.getItem("user"));
        var accessToken = userJson.accessToken;
        const res = await fetch(api, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "api-token": `${accessToken}`,
          },
        });
        const data = await res.json();
        console.log(data.data);
        if (data.data !== undefined && data.data !== null) {
          setGroupDetail(data.data);
          setMemberList(data.data.memberList);
        }

        return data;
      };
      getData();
    } catch (error) {
      setError(error.message);
      /*       console.log("AA" + error.message); */
    }
  }, []);

  const handleInviteByLink = (e) => {
    e.preventDefault();
    const inviteLink = "localhost:3001/group/" + id + "/invite";
    // Copy the text inside the text field
    navigator.clipboard.writeText(inviteLink);
    alert("Copied invite link to clipboard");
  };

  return (
    <Container className="group__detail">
      <h4 className="group__detail__name">Group title: {groupDetail?.title}</h4>
      <MemberList data={memberList}></MemberList>
      <button className="btn-invite-link" onClick={handleInviteByLink}>
        Invite by link
      </button>
      <Row>{error && <span>{error}</span>}</Row>
    </Container>
  );
};

export default GroupDetail;

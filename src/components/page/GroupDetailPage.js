import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

import List from "../group/List";
import PresentationList from "../presentation/PresentationList";
import useQuery from "../../hooks/useQuery";

import "./css/GroupDetailPage.css";

const GroupDetail = (props) => {
  const { id } = useParams();
  const query = useQuery();
  const page = query.get("page");
  //Get group detail from database
  //...
  ///
  const groupDetailLink = process.env.REACT_APP_SERVER_HOST + "/group/";

  const [groupDetail, setGroupDetail] = useState(null);
  const [memberList, setMemberList] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    try {
      const inviteUser = async () => {
        const user = JSON.parse(localStorage.getItem("user"));
        const accessToken = user.accessToken;

        try {
          await fetch(process.env.REACT_APP_SERVER_HOST + "/group/invite", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "api-token": `${accessToken}`,
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

        if (data.data !== undefined && data.data !== null) {
          setGroupDetail(data.data);
          setMemberList(data.data.memberList);
        }

        return data;
      };
      getData();
    } catch (error) {
      setError(error.message);
    }
  }, [groupDetailLink, id, props.invite]);

  const handleInviteByLink = (e) => {
    e.preventDefault();
    const inviteLink = "localhost:3000/group/" + id + "/invite";
    // Copy the text inside the text field
    navigator.clipboard.writeText(inviteLink);
    alert("Copied invite link to clipboard");
  };

  return (
    <div className="page">
      <h4 className="page__title">Group detail</h4>
      {!props.presentations && (
        <>
          <List type="member" list={memberList}></List>
          {/*           <MemberList data={memberList}></MemberList>
          <a
            className="btn-presentation-list"
            href="http://localhost:3001/group/4bbd170a-fcbe-44bd-9884-668d983d963a/presentations?page=1"
          >
            View presentations
          </a> */}
          <button className="btn-invite-link" onClick={handleInviteByLink}>
            Invite by link
          </button>
        </>
      )}
      {props.presentations && (
        <PresentationList groupID={id} page={page}></PresentationList>
      )}
      <Row>{error && <span>{error}</span>}</Row>
    </div>
  );
};

export default GroupDetail;

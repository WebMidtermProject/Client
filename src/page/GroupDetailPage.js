import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

import List from "../components/list/List";
import PresentationList from "../components/presentation/PresentationList";
import MonoButton from "../components/button/MonoButton";
import Loading from "../components/loading/Loading";
import useQuery from "../components/../hooks/useQuery";

import "./css/GroupDetailPage.css";

const GroupDetail = (props) => {
  const navigate = useNavigate();

  const { groupId } = useParams();
  console.log(groupId);
  const query = useQuery();
  const page = query.get("page");

  const groupDetailLink = process.env.REACT_APP_SERVER_HOST + "/group/";

  const [groupDetail, setGroupDetail] = useState(null);
  const [memberList, setMemberList] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
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
            body: JSON.stringify({ userID: user.id, groupID: groupId }),
          });
          alert(`Joined to group #${groupId}`);
        } catch (error) {
          console.log(error.message);
        }
      };
      if (props.invite) inviteUser();

      let api = groupDetailLink + groupId;
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
      setTimeout(() => {
        setLoading(false);
      }, Math.floor(Math.random() * 1000) + 500);
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setLoading(false);
      }, Math.floor(Math.random() * 1000) + 500);
    }
  }, [groupDetailLink, groupId, props.invite]);

  const handleInviteByLink = (e) => {
    e.preventDefault();
    const inviteLink = "localhost:3000/group/" + groupId + "/invite";
    // Copy the text inside the text field
    navigator.clipboard.writeText(inviteLink);
    alert("Copied invite link to clipboard");
  };

  const handlePresentationClick = () => {
    navigate(
      "/group/4bbd170a-fcbe-44bd-9884-668d983d963a/presentations?page=1"
    );
  };

  return (
    <div className="page--detail-group">
      <div className="page__header">
        <h4 className="page__title">My groups</h4>
      </div>

      <div className="page__content">
        <List h="550px" w="800px" type="member" list={memberList}></List>
      </div>

      <div className="page__footer">
        <MonoButton
          className="btn-logout"
          name="Presents"
          onClick={handlePresentationClick}
        ></MonoButton>
        <MonoButton
          className="btn-logout"
          name="Invite by link"
          onClick={handleInviteByLink}
        ></MonoButton>
      </div>
    </div>
  );
};

export default GroupDetail;

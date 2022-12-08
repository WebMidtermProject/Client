/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import GroupList from "./GroupList";
import "./css/ShowGroups.css";

const ShowGroups = (props) => {
  const myGroupsAPI =
    process.env.REACT_APP_SERVER_HOST + "/group/get-my-groups";
  const joinedGroupsAPI =
    process.env.REACT_APP_SERVER_HOST + "/group/get-joined-groups";

  const [groups, setGroups] = useState([]);

  useEffect(() => {
    try {
      let api = myGroupsAPI;
      if (props.type === "joined groups") api = joinedGroupsAPI;
      const getData = async () => {
        const userJson = JSON.parse(localStorage.getItem("user"));
        const accessToken = userJson.accessToken;

        const res = await fetch(api, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "api-token": `${accessToken}`,
          },
        });
        const data = await res.json();
        if (data.data.length !== 0) {
          setGroups(data.data);
        }
        return data;
      };
      getData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <section className="section-show-groups">
      <GroupList
        data={groups}
        title={props.title}
        w={props.profile ? "415px" : "900px"}
      ></GroupList>
    </section>
  );
};

export default ShowGroups;

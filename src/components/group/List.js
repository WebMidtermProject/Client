/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";

import GradientContainer from "../container/GradientCard";
import GroupItem from "./GroupItem";

import "./css/List.css";

const List = (props) => {
  const myGroupsAPI =
    process.env.REACT_APP_SERVER_HOST + "/group/get-my-groups";
  const joinedGroupsAPI =
    process.env.REACT_APP_SERVER_HOST + "/group/get-joined-groups";

  const [list, setList] = useState([]);

  useEffect(() => {
    try {
      let api = myGroupsAPI;
      if (props.type === "joined") api = joinedGroupsAPI;
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
          setList(data.data);
        }
        return data;
      };
      getData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <GradientContainer
      className={props.className ? "card " + props.className : "card"}
    >
      <ul className="group__list">
        {/* {typeof list === "object" &&
            list.map((item, key) => {
              return (
                <GroupItem
                  id={item.id}
                  title={item.title}
                  total_member={item.total_member}
                  owner_first_name={item.owner_first_name}
                  owner_last_name={item.owner_last_name}
                ></GroupItem>
              );
            })} */}
        <GroupItem
          id="1"
          title="item"
          total_member="69"
          owner_first_name="first"
          owner_last_name="last"
        ></GroupItem>
        <GroupItem
          id="1"
          title="item"
          total_member="69"
          owner_first_name="first"
          owner_last_name="last"
        ></GroupItem>
        <GroupItem
          id="1"
          title="item"
          total_member="69"
          owner_first_name="first"
          owner_last_name="last"
        ></GroupItem>
        <GroupItem
          id="1"
          title="item"
          total_member="69"
          owner_first_name="first"
          owner_last_name="last"
        ></GroupItem>
        <GroupItem
          id="1"
          title="item"
          total_member="69"
          owner_first_name="first"
          owner_last_name="last"
        ></GroupItem>
        <GroupItem
          id="1"
          title="item"
          total_member="69"
          owner_first_name="first"
          owner_last_name="last"
        ></GroupItem>
        <GroupItem
          id="1"
          title="item"
          total_member="69"
          owner_first_name="first"
          owner_last_name="last"
        ></GroupItem>
        <GroupItem
          id="1"
          title="item"
          total_member="69"
          owner_first_name="first"
          owner_last_name="last"
        ></GroupItem>
      </ul>
    </GradientContainer>
  );
};

export default List;

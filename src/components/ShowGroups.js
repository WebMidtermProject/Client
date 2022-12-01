/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";

import GroupList from "./GroupList";
import "../css/ShowGroups.css";

const ShowGroups = (props) => {
  const myGroupsAPI = "";
  const joinedGroupsAPI = "";

  const [groups, setGroups] = useState(null);

  useEffect(() => {
    console.log("LOADING ALL GROUP");
    const getGroups = async (groups) => {
      try {
        let api = myGroupsAPI;
        if (props.type === "joined groups") api = joinedGroupsAPI;

        const res = await fetch(api);
        const data = await res.json();
        console.log(data);
        setGroups(data);
      } catch (error) {
        console.log(error.message);
      }
    };
  }, []);

  return (
    <section className="section-show-groups">
      <GroupList datat={groups}></GroupList>
    </section>
  );
};

export default ShowGroups;

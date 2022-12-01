/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";

import GroupList from "./GroupList";
import "../css/ShowGroups.css";

const ShowGroups = (props) => {
  const myGroupsAPI = 'http://localhost:3001/group/get-my-groups';
  const joinedGroupsAPI = 'http://localhost:3001/group/get-joined-groups';

  const [groups, setGroups] = useState([]);

  useEffect( () => {
    console.log("LOADING ALL GROUP");

    try {
      let api = myGroupsAPI;
      if (props.type === "joined groups") api = joinedGroupsAPI;
      const getData = async ()=>{
        var userJson = JSON.parse(localStorage.getItem('user'))
        var accessToken = userJson.accessToken

        const res = await fetch(api, 
          {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'api-token': `${accessToken}`, 
            } 
          });
        const data = await res.json();
        if (data.data.length !== 0) {
          setGroups(data.data)
        }

        return data
      }
      getData()
     
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    
    <section className="section-show-groups">
      <GroupList data={groups}></GroupList>
    </section>
  );
};

export default ShowGroups;

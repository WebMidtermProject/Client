import { React, useState, useEffect } from "react";

import List from "../group/List";

import "./css/Page.css";
import "./css/MyGroupPage.css";

const MyGroupPage = (props) => {
  const api = process.env.REACT_APP_SERVER_HOST + "/group/get-my-groups";

  const [groupList, setGroupList] = useState([]);

  useEffect(() => {
    try {
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
          setGroupList(data.data);
        }
        return data;
      };
      getData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return (
    <div className="page">
      <h4 className="page__title">My groups</h4>
      <List className="card--lg" list={groupList}></List>
    </div>
  );
};
export default MyGroupPage;

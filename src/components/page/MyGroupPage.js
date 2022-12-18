import { React, useState, useEffect } from "react";

import Loading from "../loading/Loading";
import List from "../group/List";

import "./css/Page.css";
import "./css/MyGroupPage.css";

const MyGroupPage = (props) => {
  const api = process.env.REACT_APP_SERVER_HOST + "/group/get-my-groups";
  const [loading, setLoading] = useState(false);
  const [groupList, setGroupList] = useState([]);

  useEffect(() => {
    setLoading(true);
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
      setTimeout(() => {
        setLoading(false);
      }, Math.floor(Math.random() * 1000)+500);
    } catch (error) {
      setTimeout(() => {
        setLoading(false);
      }, Math.floor(Math.random() * 1000)+500);
      console.log(error.message);
    }
  }, []);
  return (
    <div className="page--my-group">
      <div className="page__header">
        <h4 className="page__title">My groups</h4>
      </div>

      <div className="page__content">
        <List h="550px" w="800px" type="joined" list={groupList}></List>
      </div>

      <div className="page__footer"></div>
      {loading && <Loading></Loading>}
    </div>
  );
};
export default MyGroupPage;

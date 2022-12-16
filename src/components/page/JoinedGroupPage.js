import React from "react";

import List from "../group/List";

import "./css/Page.css";
import "./css/JoinedGroupPage.css";

const JoinedGroupPage = (props) => {
  return (
    <div className="page">
      <h4 className="page__title">Joined groups</h4>
      <List className="card--lg" type="joined"></List>
    </div>
  );
};
export default JoinedGroupPage;

import React from "react";

import List from "../group/List";

import "./css/Page.css";
import "./css/MyGroupPage.css";

const MyGroupPage = (props) => {
  return (
    <div className="page">
      <h4 className="page__title">My groups</h4>
      <List className="card--lg"></List>
    </div>
  );
};
export default MyGroupPage;

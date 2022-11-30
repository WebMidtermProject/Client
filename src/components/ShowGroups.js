import React from "react";
import ReactDOM from "react-dom";

import GroupList from "./GroupList";
import "../css/ShowGroups.css";

const ShowGroups = (props) => {
  return (
    <section className="section-show-groups">
      <GroupList></GroupList>
    </section>
  );
};

export default ShowGroups;

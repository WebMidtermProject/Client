import React from "react";

import GroupList from "./MyGroup";
import Content from "./Content";

import "../css/MainSection.css";

const MainSection = (props) => {
  return (
    <main className="main-content">
      <GroupList title="My Group"></GroupList>
      <Content></Content>
      <GroupList title="Joined Group"></GroupList>
    </main>
  );
};

export default MainSection;

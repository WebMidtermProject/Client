import React from "react";

import MainLeftNavBar from "./MainLeftNavBar";
import MainRightNavBar from "./MainRightNavBar";

import "./css/Header.css";

const MainHeader = (props) => {
  // const [user, setUser] = useState(props.user)
  return (
    <header>
      <h1 className="header__title">
        <a href="/">KAHOOT DUPE</a>
      </h1>
      <div className="header__navbar">
        <MainLeftNavBar user={props.user}></MainLeftNavBar>
        <MainRightNavBar user={props.user}></MainRightNavBar>
      </div>
    </header>
  );
};

export default MainHeader;

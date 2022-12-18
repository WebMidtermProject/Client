import React from "react";

import LeftNavBar from "./LeftNavBar";
import RightNavBar from "./RightNavBar";

import "./css/Header.css";

const Header = (props) => {
  // const [user, setUser] = useState(props.user)
  return (
    <header>
      <h1 className="header__title">
        <a href="/">KAHOOT DUPE</a>
      </h1>
      <div className="header__navbar">
        <LeftNavBar user={props.user}></LeftNavBar>
        <RightNavBar user={props.user}></RightNavBar>
      </div>
    </header>
  );
};

export default Header;

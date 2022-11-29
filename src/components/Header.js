import React from "react";
import { useState } from "react";

import LeftNavBar from "./LeftNavBar";
import RightNavBar from "./RightNavBar";

import "./Header.css";

const Header = (props) => {
  const [user, setUser] = useState(props.user);
  return (
    <header>
      <LeftNavBar></LeftNavBar>
      <RightNavBar></RightNavBar>
    </header>
  );
};

export default Header;

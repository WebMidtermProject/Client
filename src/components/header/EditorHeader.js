import React from "react";

import EditorRightNavBar from "./EditorRightNavBar";

import "./css/Header.css";

const EditorHeader = (props) => {
  // const [user, setUser] = useState(props.user)
  return (
    <header>
      <h1 className="header__title">
        <a href="/">KAHOOT DUPE</a>
      </h1>
      <div className="header__navbar">
        <div></div>
        <EditorRightNavBar user={props.user}></EditorRightNavBar>
      </div>
    </header>
  );
};

export default EditorHeader;

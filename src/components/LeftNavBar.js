import React from "react";

import "./LeftNavBar.css";

const LeftNavBar = (props) => {
  return (
    <nav className="nav nav--left">
      <div>
        <h1 className="nav__title">
          <a href="/">KAHOOT DUPE</a>
        </h1>
        {props.user && (
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/new-group">New Group</a>
            </li>
            <li className="nav__item">
              <a href="/new-group">My Groups</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default LeftNavBar;

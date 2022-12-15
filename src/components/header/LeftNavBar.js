/* eslint-disable react/prop-types */
import React from "react";

const LeftNavBar = (props) => {
  return (
    <nav className="nav nav--left">
      <div>
        {!props.user && (
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/profile">Profile</a>
            </li>
            <li className="nav__item">
              <a href="/my-groups">My Groups</a>
            </li>
            <li className="nav__item">
              <a href="/joined-groups">Joined Groups</a>
            </li>
            <li className="nav__item">
              <a href="/about">About</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default LeftNavBar;

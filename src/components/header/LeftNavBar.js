/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const LeftNavBar = (props) => {
  return (
    <nav className="nav nav--left">
      <div>
        {!props.user && (
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="profile">Profile</Link>
            </li>
            <li className="nav__item">
              <Link to="my-groups">My Groups</Link>
            </li>
            <li className="nav__item">
              <Link to="joined-groups">Joined Groups</Link>
            </li>
            <li className="nav__item">
              <Link to="about">About</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default LeftNavBar;

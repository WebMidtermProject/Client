/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const LeftNavBar = (props) => {
  return (
    <nav className="nav--left">
      <ul className="nav__list">
        {props.user !== null && (
          <>
            <li className="nav__item">
              <Link to="groups">All Groups</Link>
            </li>
            <li className="nav__item">
              <Link to="profile">Profile</Link>
            </li>
            <li className="nav__item">
              <Link to="my-groups">My Groups</Link>
            </li>
            <li className="nav__item">
              <Link to="joined-groups">Joined Groups</Link>
            </li>
          </>
        )}
        <li className="nav__item">
          <Link to="about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default LeftNavBar;

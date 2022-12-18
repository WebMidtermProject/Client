/* eslint-disable react/prop-types */
import React from "react";

import MonoButton from "../button/MonoButton";

import "./css/RightNavBar.css";

const RightNavBar = (props) => {
  const handleLogoutClick = (event) => {
    event.preventDefault();
    localStorage.removeItem("user");
    window.location = "/";
  };
  return (
    <nav className="nav--right">
      {props.user === null && (
        <ul className="nav__list">
          <li className="nav__item">
            <a href="/sign-in">Sign in</a>
          </li>
          <li className="nav__item">
            <a href="/sign-up">Sign up</a>
          </li>
        </ul>
      )}
      {props.user !== null && (
        <ul className="nav__list">
          <li className="nav__item">
            <a href="/profile">
              <h2 className="nav__user__name">
                {props.user?.name ? props.user.name : "Username"}
              </h2>
              {props.user?.img && <img src={props.user.img} alt="" />}
              {!props.user?.img && (
                <img
                  className="nav__user__img"
                  src="https://cdn3.vectorstock.com/i/thumb-large/32/12/default-avatar-profile-icon-vector-39013212.jpg"
                  alt=""
                />
              )}
            </a>
          </li>
          <MonoButton
            className="btn-logout"
            name="Logout"
            onClick={handleLogoutClick}
          ></MonoButton>
        </ul>
      )}
    </nav>
  );
};

export default RightNavBar;

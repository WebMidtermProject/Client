/* eslint-disable react/prop-types */
import React from "react";

const RightNavBar = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const handleLogoutClick = (event) => {
    event.preventDefault();
    localStorage.removeItem("user");
    window.location = "/";
  };
  return (
    <nav className="nav nav--right">
      {!user && (
        <ul className="nav__list">
          <li className="nav__item">
            <a href="/sign-in">Sign in</a>
          </li>
          <li className="nav__item">
            <a href="/sign-up">Sign up</a>
          </li>
        </ul>
      )}
      {user && (
        <ul className="nav__list">
          <li className="nav__item">
            <a href="/profile">
              <h2 className="nav__item__user__name">
                {user?.name ? user.name : "Username"}
              </h2>
              {user?.img && <img src={user.img} alt="" />}
              {!user?.img && (
                <img
                  className="nav__item__user__img"
                  src="https://cdn3.vectorstock.com/i/thumb-large/32/12/default-avatar-profile-icon-vector-39013212.jpg"
                  alt=""
                />
              )}
            </a>
          </li>
          <li>
            <input
              className="btn-logout"
              type="button"
              value="Logout"
              onClick={handleLogoutClick}
            />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default RightNavBar;

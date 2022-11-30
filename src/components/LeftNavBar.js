import React from "react";

const LeftNavBar = (props) => {
  return (
    <nav className="nav nav--left">
      <div>
        {!props.user && (
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

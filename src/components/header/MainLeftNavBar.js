/* eslint-disable react/prop-types */
import { React, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import NavItem from "./NavItem";

import "./css/LeftNavBar.css";

const MainLeftNavBar = (props) => {
  const [selected, setSelected] = useState(undefined);
  const handleItemClick = (e, id) => {
    console.log(e);
    setSelected(id);
  };
  return (
    <nav className="nav--left">
      <ul className="nav__list">
        {props.user !== null && (
          <>
            <NavItem
              className={selected === 1 ? "selected" : null}
              onClick={() => {
                handleItemClick(1);
              }}
            >
              <Link to="groups">All Groups</Link>
            </NavItem>
            <NavItem
              className={selected === 3 ? "selected" : null}
              onClick={() => {
                handleItemClick(2);
              }}
            >
              <Link to="my-groups">My Groups</Link>
            </NavItem>
            <NavItem
              className={selected === 4 ? "selected" : null}
              onClick={() => {
                handleItemClick(3);
              }}
            >
              <Link to="joined-groups">Joined Groups</Link>
            </NavItem>
          </>
        )}
        <NavItem
          className={selected === 5 ? "selected" : null}
          onClick={() => {
            handleItemClick(4);
          }}
        >
          <Link to="my-presentations">My Presentations</Link>
        </NavItem>
        <NavItem
          className={selected === 4 ? "selected" : null}
          onClick={() => {
            handleItemClick(5);
          }}
        >
          <Link to="about">About</Link>
        </NavItem>
      </ul>
    </nav>
  );
};

export default MainLeftNavBar;

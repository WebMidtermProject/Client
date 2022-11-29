import React from "react";
import { useLocation } from "react-router-dom";

import Header from "./Header";

import "./HomePage.css";

const HomePage = (props) => {
  /*   const { state } = useLocation();
  const { email } = state; */

  return (
    <>
      <Header></Header>
      <footer></footer>
    </>
  );
};

export default HomePage;

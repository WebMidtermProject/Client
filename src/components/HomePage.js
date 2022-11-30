import React from "react";
/* import { useLocation } from "react-router-dom"; */

import Header from "./Header";
import MainContent from "./MainSection";
import Footer from "./Footer";

import "../css/HomePage.css";

const HomePage = (props) => {
  /*   const { state } = useLocation();
  const { email } = state; */

  return (
    <div className="home-page">
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;

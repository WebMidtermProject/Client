import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Profile from "./Profile";

import "../css/Content.css";

const Content = (props) => {
  return (
    <article className="main-content__center">
      <Routes>
        <Route path="/" element={<h2>Profile</h2>}></Route>
        <Route path="/home" element={<h2>Profile</h2>}></Route>
        <Route path="/home/profile" element={<h2>Profile</h2>}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Profile></Profile>}></Route>
        <Route path="/home" element={<Profile></Profile>}></Route>
        <Route path="/home/profile" element={<Profile></Profile>}></Route>
        <Route path="/home/create-group" element={<div></div>}></Route>
        <Route path="/home/create-group" element={<div></div>}></Route>
      </Routes>
    </article>
  );
};

export default Content;

/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import SignInPage from "./login/SignInPage";
import SignUpPage from "./sign-up/SignUpPage";
import Profile from "./profile/Profile";
import ShowGroups from "./group/ShowGroups";
import CreateGroupForm from "./group/CreateGroupForm";
import GroupDetail from "./group/GroupDetail";
import About from "./about/About";

import "../css/Content.css";

const Content = (props) => {
  const user = localStorage.getItem("user");

  return (
    <article className="content">
      <Routes>
        <Route
          path="/"
          element={user ? <Profile></Profile> : <Navigate to="/sign-in" />}
        />

        <Route
          path="/sign-in"
          element={user ? <Navigate to="/" /> : <SignInPage></SignInPage>}
        />

        <Route
          path="/sign-up"
          element={user ? <Navigate to="/" /> : <SignUpPage></SignUpPage>}
        />

        <Route
          path="/profile"
          element={user ? <Profile></Profile> : <Navigate to="/sign-in" />}
        />

        <Route
          path="/my-groups"
          element={
            user ? <ShowGroups></ShowGroups> : <Navigate to="/sign-in" />
          }
        />

        <Route
          path="/joined-groups"
          element={
            user ? (
              <ShowGroups type="joined groups"></ShowGroups>
            ) : (
              <Navigate to="/sign-in" />
            )
          }
        />

        <Route
          path="/create-group"
          element={
            user ? (
              <CreateGroupForm></CreateGroupForm>
            ) : (
              <Navigate to="/sign-in" />
            )
          }
        />

        <Route
          path="/group/:id"
          element={
            user ? <GroupDetail></GroupDetail> : <Navigate to="/sign-in" />
          }
        />

        <Route
          path="/group/:id/invite"
          element={
            user ? (
              <GroupDetail invite={true}></GroupDetail>
            ) : (
              <Navigate to="/sign-in" />
            )
          }
        />

        <Route path="/about" element={<About></About>} />
      </Routes>
    </article>
  );
};

export default Content;

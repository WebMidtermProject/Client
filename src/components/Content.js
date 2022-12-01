/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";

import Profile from "./Profile";
import ShowGroups from "./ShowGroups";
import CreateGroupForm from "./CreateGroupForm";
import GroupDetail from "./GroupDetail";
import About from "./About";

import "../css/Content.css";

const Content = (props) => {
  const user = localStorage.getItem("user");

  return (
    <article className="content">
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <>
                <h2>Profile</h2>
                <Profile></Profile>
              </>
            ) : (
              <SignInPage></SignInPage>
            )
          }
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
          element={
            user ? (
              <>
                <h2>Profile</h2>
                <Profile></Profile>
              </>
            ) : (
              <Navigate to="/sign-in" />
            )
          }
        />
        <Route
          path="/my-groups"
          element={
            user ? (
              <>
                <h2>My groups</h2>
                <ShowGroups></ShowGroups>
              </>
            ) : (
              <Navigate to="/sign-in" />
            )
          }
        />
        <Route
          path="/joined-groups"
          element={
            user ? (
              <>
                <h2>Joined groups</h2>
                <ShowGroups></ShowGroups>
              </>
            ) : (
              <Navigate to="/sign-in" />
            )
          }
        />
        <Route
          path="/create-group"
          element={
            user ? (
              <>
                <h2>Create Group</h2>
                <CreateGroupForm></CreateGroupForm>
              </>
            ) : (
              <Navigate to="/sign-in" />
            )
          }
        />
        <Route
          path="/group/:id"
          element={
            user ? (
              <>
                <h2>Group</h2>
                <GroupDetail></GroupDetail>
              </>
            ) : (
              <Navigate to="/sign-in" />
            )
          }
        />
        <Route
          path="/group/:id/invite"
          element={
            user ? (
              <>
                <h2>Group</h2>
                <GroupDetail invite={true}></GroupDetail>
              </>
            ) : (
              <Navigate to="/sign-in" />
            )
          }
        />

        <Route
          path="/about"
          element={
            <>
              <h2>About</h2>
              <About></About>
            </>
          }
        />
      </Routes>
    </article>
  );
};

export default Content;

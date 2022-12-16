/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import SignInPage from "./login/SignInPage";
import SignUpPage from "./sign-up/SignUpPage";
import Profile from "./profile/Profile";
import GroupDetailPage from "./page/GroupDetailPage";
import PresentationList from "./presentation/PresentationList";
import CreatePresentationForm from "./presentation/CreatePresentationForm";

import MyGroupPage from "./page/MyGroupPage";
import JoinedGroupPage from "./page/JoinedGroupPage";

import AboutPage from "./page/AboutPage";

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
            user ? <MyGroupPage></MyGroupPage> : <Navigate to="/sign-in" />
          }
        />

        <Route
          path="/joined-groups"
          element={
            user ? (
              <JoinedGroupPage></JoinedGroupPage>
            ) : (
              <Navigate to="/sign-in" />
            )
          }
        />

        <Route
          path="/group/:id"
          element={
            user ? (
              <GroupDetailPage></GroupDetailPage>
            ) : (
              <Navigate to="/sign-in" />
            )
          }
        />

        <Route
          path="/group/:id/invite"
          element={
            user ? (
              <GroupDetailPage invite={true}></GroupDetailPage>
            ) : (
              <Navigate to="/sign-in" />
            )
          }
        />
        <Route
          path="/group/:id/presentations"
          element={
            user ? (
              <GroupDetailPage presentations={true}></GroupDetailPage>
            ) : (
              <Navigate to="/sign-in" />
            )
          }
        ></Route>

        <Route
          path="/group/:id/create-presentation"
          element={
            user ? (
              <CreatePresentationForm></CreatePresentationForm>
            ) : (
              <Navigate to="/sign-in" />
            )
          }
        ></Route>

        <Route path="/about" element={<AboutPage></AboutPage>} />
      </Routes>
    </article>
  );
};

export default Content;

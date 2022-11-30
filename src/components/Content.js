import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Profile from "./Profile";
import SignInPage from "./SignInPage";
import CreateGroupForm from "./CreateGroupForm";

import "../css/Content.css";

const Content = (props) => {
  const user = props.user;
  return (
    <article className="content">
      <Routes>
        <Route path="/" element={<h2>Profile</h2>} />
        <Route path="/profile" element={<h2>Profile</h2>} />
        <Route path="/create-group" element={<h2>Create Group</h2>} />
      </Routes>

      <Routes>
        <Route path="/" element={<Profile></Profile>} />

        <Route path="/profile" element={<Profile></Profile>} />

        <Route
          path="/create-group"
          element={<CreateGroupForm></CreateGroupForm>}
        />
        <Route
          path="/sign-in"
          element={user ? <Navigate to="/" /> : <SignInPage />}
        />
      </Routes>
    </article>
  );
};

export default Content;

/* <Routes>
<Route
  path="/"
  element={user ? <Profile></Profile> : <Navigate to="/signin" />}
/>

<Route
  path="/profile"
  element={user ? <Profile></Profile> : <Navigate to="/signin" />}
/>

<Route
  path="/"
  element={
    user ? (
      <CreateGroupForm></CreateGroupForm>
    ) : (
      <Navigate to="/signin" />
    )
  }
/>
<Route path="/signin" element={<SignInPage />} />
</Routes> */

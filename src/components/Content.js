import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Profile from "./Profile";
import SignInPage from "./SignInPage";
import ShowGroups from "./ShowGroups";
import CreateGroupForm from "./CreateGroupForm";
import GroupDetail from "./GroupDetail";

import "../css/Content.css";

const Content = (props) => {
  const user = props.user;
  return (
    <article className="content">
      <Routes>
        <Route path="/" element={<h2>Profile</h2>} />
        <Route path="/profile" element={<h2>Profile</h2>} />
        <Route path="/my-groups" element={<h2>My groups</h2>} />
        <Route path="/joined-groups" element={<h2>Joined groups</h2>} />
        <Route path="/create-group" element={<h2>Create Group</h2>} />
        <Route path="/group/:id" element={<h2>Group Detail</h2>} />
      </Routes>

      <Routes>
        <Route path="/" element={<Profile></Profile>} />

        <Route path="/profile" element={<Profile></Profile>} />
        <Route path="/my-groups" element={<ShowGroups></ShowGroups>} />
        <Route path="/joined-groups" element={<ShowGroups></ShowGroups>} />
        <Route
          path="/create-group"
          element={<CreateGroupForm></CreateGroupForm>}
        />
        <Route path="/group/:id" element={<GroupDetail></GroupDetail>} />
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

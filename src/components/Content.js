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
  const user = props.user;
  console.log(user);
  return (
    <article className="content">
{/*       <Routes>
        <Route path="/" element={<h2>Profile</h2>} />
        <Route path="/profile" elsement={<h2>Profile</h2>} />
        <Route path="/my-groups" element={<h2>My groups</h2>} />
        <Route path="/joined-groups" element={<h2>Joined groups</h2>} />
        <Route path="/create-group" element={<h2>Create Group</h2>} />
        <Route path="/group/:id" element={<h2>Group Detail</h2>} />
        <Route path="/about" element={<h2>About</h2>} />
      </Routes> */}

        <Routes>
          <Route path="/sign-in" element={user ? <Navigate to="/profile " /> : <SignInPage></SignInPage>} />
{/*           <Route
            path="/"
            element={user ? <Profile></Profile> : <Navigate to="/sign-in" />}
          />
          <Route
            path="/profile"
            element={user ? <Profile></Profile> : <Navigate to="/sign-in" />}
          /> */}
          <Route path="/create-group" element={user ? <CreateGroupForm></CreateGroupForm> : <Navigate to="/ccccc" />} />
      </Routes>
    </article>
  );
};

export default Content;

/* <Routes>

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

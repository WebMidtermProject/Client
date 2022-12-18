import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./components/App";
import SignInPage from "./components/login/SignInPage";
import SignUpPage from "./components/sign-up/SignUpPage";
import Profile from "./components/page/ProfilePage";
import MyGroupPage from "./components/page/MyGroupPage";
import JoinedGroupPage from "./components/page/JoinedGroupPage";
import GroupDetail from "./components/page/GroupDetailPage";
import AboutPage from "./components/page/AboutPage";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
          <Route path="" element={<Profile></Profile>}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="my-groups" element={<MyGroupPage />}></Route>
          <Route path="joined-groups" element={<JoinedGroupPage />}></Route>
          <Route path="group" element={<GroupDetail />}></Route>
          <Route path="about" element={<AboutPage />}></Route>
          {/* others */}
          <Route path="*" element={<h1>404 Not found</h1>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

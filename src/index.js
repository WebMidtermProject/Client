import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from "./components/App";
import ProtectedRoute from "./components/ProtectedRoute";
import SignInPage from "./components/login/SignInPage";
import SignUpPage from "./components/sign-up/SignUpPage";
import Profile from "./components/page/ProfilePage";
import MyGroupPage from "./components/page/MyGroupPage";
import JoinedGroupPage from "./components/page/JoinedGroupPage";
import GroupDeTailPage from "./components/page/GroupDetailPage";
import AboutPage from "./components/page/AboutPage";

import "./index.css";
import PresentationList from "./components/presentation/PresentationList";

const root = ReactDOM.createRoot(document.getElementById("root"));
const user = localStorage.getItem("user");

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
          <Route
            path="profile"
            element={
              <ProtectedRoute user={user}>
                <Profile></Profile>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="my-groups"
            element={
              <ProtectedRoute user={user}>
                <MyGroupPage />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="joined-groups"
            element={
              <ProtectedRoute user={user}>
                <JoinedGroupPage />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="groups"
            element={
              <ProtectedRoute user={user}>
                <h1>All Groups</h1>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="groups/:groupId"
            element={
              <ProtectedRoute user={user}>
                <GroupDeTailPage />
              </ProtectedRoute>
            }
          >
            {/*             <Route path="presentations/:presentId">
              <ProtectedRoute user={user}>
                <PresentationList />
              </ProtectedRoute>
            </Route> */}
          </Route>
          <Route path="about" element={<AboutPage />}></Route>
          {/* others */}
          <Route path="*" element={<h1>404 Not found</h1>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

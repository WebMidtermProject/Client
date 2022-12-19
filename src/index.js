import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from "./components/App";
import ProtectedRoute from "./components/ProtectedRoute";
import SignInPage from "./page/SignInPage";
import SignUpPage from "./page/SignUpPage";
import Profile from "./page/ProfilePage";
import MyGroupPage from "./page/MyGroupPage";
import JoinedGroupPage from "./page/JoinedGroupPage";
import GroupDeTailPage from "./page/GroupDetailPage";
import MyPresentationPage from "./page/MyPresentationPage";
import EditorPage from "./page/EditorPage";
import PresentPage from "./page/PresentPage";
import MultipleChoiceSlide from "./components/slide/MultipleChoiceSlide";
import AboutPage from "./page/AboutPage";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const user = localStorage.getItem("user");

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="sign-in" element={<SignInPage></SignInPage>}></Route>
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
          ></Route>
          <Route
            path="my-presentations"
            element={
              <ProtectedRoute user={user}>
                <>
                  {/*                   <MultipleChoiceSlide size="lg"></MultipleChoiceSlide>
                  <MultipleChoiceSlide size="sm"></MultipleChoiceSlide> */}
                  <MyPresentationPage></MyPresentationPage>
                </>
              </ProtectedRoute>
            }
          ></Route>

          <Route path="about" element={<AboutPage />}></Route>

          {/* others */}
          <Route path="*" element={<h1>404 Not found</h1>}></Route>
        </Route>
        <Route
          path="my-presentations/:presentationId/edit"
          element={
            <ProtectedRoute user={user}>
              <EditorPage></EditorPage>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="my-presentations/:presentationId/present"
          element={
            <ProtectedRoute user={user}>
              <>
                {/*                   <MultipleChoiceSlide size="lg"></MultipleChoiceSlide>
                  <MultipleChoiceSlide size="sm"></MultipleChoiceSlide> */}
                <PresentPage></PresentPage>
              </>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="present-small"
          element={
            <ProtectedRoute user={user}>
              <MultipleChoiceSlide type="sm"></MultipleChoiceSlide>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="present-medium"
          element={
            <ProtectedRoute user={user}>
              <MultipleChoiceSlide type="md"></MultipleChoiceSlide>
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

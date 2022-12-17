import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import Content from "./router";

import EditPresentation from "./presentation/EditPresentation.js";
import Present from "./presentation/Present";

import "../css/App.css";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = React.useState();

  useEffect(() => {
    const theUser = localStorage.getItem("user");

    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
  }, []);

  return (
    <div className="app">
      <audio autoPlay>
        <source src="./bg-music.mp3" />
      </audio>
      {/*         <Route
          path="*"
          element={
            <>
              <Header></Header>
              <Content user={user}></Content>
              <Footer></Footer>
            </>
          }
        ></Route>
        <Route
          path="/group/:groupId/edit-presentation/:presentationId"
          element={<EditPresentation></EditPresentation>}
        ></Route>

        <Route
          path="/group/:groupId/present/:presentationId"
          element={<Present></Present>}
        ></Route> */}
      <Header></Header>
      <Content user={user}></Content>
      <Footer></Footer>
    </div>
  );
};

export default App;

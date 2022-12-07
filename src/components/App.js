import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import Content from "./router";

import EditPresentation from "./presentation/EditPresentation.js";

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
      <Routes>
        <Route
          path="*"
          element={
            <>
              {" "}
              <Header></Header>
              <Content user={user}></Content>
              <Footer></Footer>
            </>
          }
        ></Route>
        <Route
          path="/present/edit"
          element={<EditPresentation></EditPresentation>}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;

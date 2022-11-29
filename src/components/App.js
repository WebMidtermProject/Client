import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Container, Form, Button, Row } from "react-bootstrap";
import { useEffect } from "react";

import SignInPage from "./SignInPage";
import HomePage from "./HomePage";

import "./App.css";

const App = () => {
  const [user, setUser] = React.useState();
  /*   console.log(user); */

  useEffect(() => {
    const theUser = localStorage.getItem("user");

    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        {/*         <Route path="/sign-in" element={<HomePage user={user} />} /> */}
      </Routes>
    </div>
  );
};

export default App;

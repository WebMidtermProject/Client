import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import Content from "./router";

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
      <Header></Header>
      <Content user={user}></Content>
      <Footer></Footer>
    </div>
  );
};

export default App;

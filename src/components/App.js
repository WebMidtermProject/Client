import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

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

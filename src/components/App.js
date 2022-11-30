import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

import "../css/App.css";

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
      {/*       {user && <Header></Header>} */}
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
      {/*       {user && <Footer></Footer>} */}
    </div>
  );
};

export default App;

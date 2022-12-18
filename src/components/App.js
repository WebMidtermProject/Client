import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Routes,
  Route,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Header from "./header/Header";
import Footer from "./footer/Footer";

import Page from "./page/Page";
/* import EditPresentation from "./presentation/EditPresentation.js";
import Present from "./presentation/Present"; */

import "../css/App.css";

const App = (props) => {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const location = useLocation();
  const path = location.pathname;
  if (path.search("sign-in") === -1 && user === null) navigate("/sign-in");

  return (
    <div className="app">
      <Header></Header>
      <Page>
        <Outlet></Outlet>
      </Page>
      <Footer></Footer>
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
    </div>
  );
};

export default App;

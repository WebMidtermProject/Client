import React from "react";
import { Container } from "react-bootstrap";

import Chart from "./Chart";
import "./css/Slide.css";

const Slide = (props) => {
  const size = props.size;
  let cls = props.className;

  if (cls === "last-slide") cls = "slide " + cls;
  else cls = "slide";

  let width = "1100px";
  let height = "550px";

  if (size === "mini") {
    width = "200px";
    height = "100px";
  }

  let property = "";
  if (size === "large") property = "center";

  return (
    <Container
      className={cls + " " + property}
      style={{ width: width, height: height }}
    >
      {cls !== "slide last-slide" && (
        <>
          <h4 className="slide__title">Slide title</h4>
          <Chart></Chart>
          {/*           <ul className="slide__list">
            <li className="slide__answer">Answer A</li>
            <li className="slide__answer">Answer B</li>
            <li className="slide__answer">Answer C</li>
            <li className="slide__answer">Answer D</li>
          </ul> */}
        </>
      )}
      {cls === "slide last-slide" && <span className="slide__title">+</span>}
    </Container>
  );
};

export default Slide;

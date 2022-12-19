import React from "react";
import { Container } from "react-bootstrap";

import Chart from "../presentation/Chart";
import "./css/Slide.css";

const Slide = (props) => {
  const size = props.size;
  const ownerMode = props.ownerMode;
  console.log(ownerMode);
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
  if (size === "large") property = " center";

  return (
    <Container
      className={cls + property}
      style={{ width: width, height: height }}
    >
      {cls !== "slide last-slide" && (
        <>
          <h4 className="slide__question">Slide title</h4>
          {ownerMode && <Chart className="owner-view"></Chart>}
          {!ownerMode && (
            <div className={"others-view " + size}>
              <input
                type="radio"
                id="ans1"
                name="fav_language"
                value="Answer 1"
              ></input>
              <label htmlFor="ans1">Answer 1</label>
              <br></br>
              <input
                type="radio"
                id="ans2"
                name="fav_language"
                value="Answer 2"
              ></input>
              <label htmlFor="ans2">Answer 2</label>
              <br></br>
              <input
                type="radio"
                id="ans3"
                name="fav_language"
                value="Answer 3"
              ></input>
              <label htmlFor="ans3">Answer 3</label>
              <br></br>
              <input
                type="radio"
                id="ans4"
                name="fav_language"
                value="Answer 4"
              ></input>
              <label htmlFor="ans4">Answer 4</label>
              <br></br>
            </div>
          )}

          {/*           <ul className="slide__list">
            <li className="slide__answer">Answer A</li>
            <li className="slide__answer">Answer B</li>
            <li className="slide__answer">Answer C</li>
            <li className="slide__answer">Answer D</li>
          </ul> */}
        </>
      )}
      {cls === "slide last-slide" && <span className="slide__question">+</span>}
    </Container>
  );
};

export default Slide;

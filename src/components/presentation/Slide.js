import React from "react";
import { Container } from "react-bootstrap";

import "./css/Slide.css";

const Slide = (props) => {
  const width = props.width;
  const height = props.height;
  const color = props.color;

  /*   */
  return (
    <Container className="slide" style={{ width: width, height: height }}>
      <h4 className="slide__title">Slide title</h4>
      <ul className="slide__list">
        <li className="slide__item">Answer A</li>
        <li className="slide__item">Answer B</li>
        <li className="slide__item">Answer C</li>
        <li className="slide__item">Answer D</li>
      </ul>
    </Container>
  );
};

export default Slide;

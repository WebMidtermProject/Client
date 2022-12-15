import React from "react";
import { Container } from "react-bootstrap";

import "./css/GradientContainer.css";

const GradientContainer = (props) => {
  return (
    <Container className="container--gradient container--outside">
      <div className="container--gradient container--inside">
        {props.children}
      </div>
    </Container>
  );
};

export default GradientContainer;

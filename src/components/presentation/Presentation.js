import React from "react";
import { Container } from "react-bootstrap";

import "./css/Presentation.css";

const Presentation = (props) => {
  return (
    <Container className="presentation">
      <span className="presentation__name">{props.name}</span>
    </Container>
  );
};

export default Presentation;

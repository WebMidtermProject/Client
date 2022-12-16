import React from "react";
import { Container } from "react-bootstrap";

import "./css/GradientCard.css";

const GradientCard = (props) => {
  return (
    <Container
      className={
        props.className
          ? props.className + " card card--gradient card--outside"
          : "card--gradient card--outside"
      }
    >
      <div className="card--gradient card--inside">
        <div className="card-radius-fix">{props.children}</div>
      </div>
    </Container>
  );
};

export default GradientCard;

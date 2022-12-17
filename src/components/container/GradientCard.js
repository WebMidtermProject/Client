import React from "react";
import { Container } from "react-bootstrap";

import "./css/GradientCard.css";

const GradientCard = (props) => {
  let style = {
    height: props.h ? props.h : "100%",
    width: props.w ? props.w : "100%",
    minWidth: props.mw ? props.mw : "320px",
    minHeight: props.mh ? props.mh : "160px",
  };
  return (
    <Container className="card--gradient card--outside" style={style}>
      <div className="card--gradient card--inside">
        {/*         <div className="card-radius-fix"></div> */}
        {props.children}
      </div>
    </Container>
  );
};

export default GradientCard;

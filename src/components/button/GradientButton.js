import React from "react";
import "./css/GradientButton.css";

const GradientButton = (props) => {
  return (
    <>
      {props.type === "submit" && (
        <button
          type="submit"
          className="btn btn--gradient"
          onClick={props.onClick}
        >
          {props.name}
        </button>
      )}
    </>
  );
};

export default GradientButton;

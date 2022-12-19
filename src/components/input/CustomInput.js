import React from "react";

import "./css/CustomInput.css";
const CustomInput = (props) => {
  return (
    <div className="custom-input">
      <input type="text" placeholder=" " />
      <label>{props.label}</label>
    </div>
  );
};

export default CustomInput;

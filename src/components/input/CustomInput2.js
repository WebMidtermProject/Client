import React from "react";

import "./css/CustomInput2.css";

const CustomInput2 = (props) => {
  return (
    <div className="custom-input-2">
      {props.label && <label for="username2">Username</label>}
      <input
        autoComplete="off"
        type="text"
        id={props.label && props.id}
        placeholder={props.place}
      />
    </div>
  );
};

export default CustomInput2;

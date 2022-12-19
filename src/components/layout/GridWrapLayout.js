import React from "react";

import "./css/GridWrapLayout.css";

const gridWrapLayout = (props) => {
  return (
    <div class="wrapper">
      {props.data.map((item, key) => {
        return (
          <div className="presentation__item" key={key}>
            <span>{item}</span>
          </div>
        );
      })}
    </div>
  );
};

export default gridWrapLayout;

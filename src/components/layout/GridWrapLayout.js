import React from "react";

import "./css/GridWrapLayout.css";

const gridWrapLayout = (props) => {
  const handleChoosePresent = (key) => {
    window.location.replace(`my-presentations/${key}/edit`);
  };

  return (
    <div className="wrapper">
      {props.data.map((item, key) => {
        return (
          <div
            className="presentation__item"
            key={key}
            onClick={() => {
              handleChoosePresent(key);
            }}
          >
            <span>{item}</span>
          </div>
        );
      })}
    </div>
  );
};

export default gridWrapLayout;

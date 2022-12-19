import React from "react";

import "./css/RadioAnswer.css";

const RadioAnswer = (props) => {
  const answers = ["Answer 1", "Answer 2", "Answer 3", "Answer 4"];
  return (
    <div className="radio-answer">
      {answers.map((answer, key) => {
        return (
          <label className="rad-label" key={key}>
            <input type="radio" className="rad-input" name="rad"></input>
            <div className="rad-design"></div>
            <div className="rad-text">Air</div>
          </label>
        );
      })}
    </div>
  );
};

export default RadioAnswer;

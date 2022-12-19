import React from "react";

import "./css/RadioAnswer.css";

const RadioAnswer = (props) => {
  const answers = ["Answer 1", "Answer 2", "Answer 3", "Answer 4"];
  return (
    <div className="radio-answer">
      {answers.map((answer, key) => {
        return (
          <div className="radio__item">
            <input
              type="radio"
              id={key}
              className="radio__input"
              name="gender"
            />
            <label for={key} className="radio__label">
              {answer}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioAnswer;

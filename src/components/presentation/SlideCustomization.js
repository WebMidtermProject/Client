import { React, useState } from "react";

import CustomInput from "../input/CustomInput";
import CustomInput2 from "../input/CustomInput2";
import MonoButton from "../button/MonoButton";

import "./css/SlideCustomization.css";

const SlideCustomization = () => {
  const limit = 8;
  const [options, setOptions] = useState([]);

  const handleAddOptions = () => {
    if (options.length < limit) setOptions([...options, options.length + 1]);
  };

  return (
    <div className="slide-config">
      <section>
        <strong className="slide-config__title background">Background:</strong>
        <input type="color" name="head" value="#ffffff"></input>
      </section>

      <section>
        <strong className="slide-config__title question">Question:</strong>
        {/*         <input
          className="slide-config__input"
          type="text"
          placeholder="Please type here..."
        /> */}
        <CustomInput2 place="Enter your question..."></CustomInput2>
      </section>
      <section>
        <strong className="slide-config__title options">Options:</strong>
        <div className="slide-config__list">
          {options.map((option) => {
            return (
              <CustomInput
                label={`Option ${option}`}
                id="answer"
                place="Enter your answer..."
              ></CustomInput>
            );
          })}
        </div>

        <MonoButton className="btn--add-option" onClick={handleAddOptions}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12.75 11.25V5a.75.75 0 1 0-1.5 0v6.25H5a.75.75 0 1 0 0 1.5h6.25V19a.75.75 0 1 0 1.5 0v-6.25H19a.75.75 0 1 0 0-1.5h-6.25z"
            ></path>
          </svg>
          <span>Add options</span>
        </MonoButton>
      </section>
    </div>
  );
};

export default SlideCustomization;

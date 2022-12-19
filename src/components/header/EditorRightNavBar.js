import React from "react";

import MonoButton from "../button/MonoButton";

import "./css/EditorRightNavBar.css";

const TaskBar = (props) => {
  const presentationId = props.presentationId;
  const groupId = props.groupId;

  const handlePresentClick = () => {
    window.location.replace(`./present`);
  };

  const handleDeleteClick = () => {};

  return (
    <div className="nav--right">
      <MonoButton
        className="btn--delete"
        name="Delete"
        onClick={handleDeleteClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M8 5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3h4.25a.75.75 0 1 1 0 1.5H19V18a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6.5H3.75a.75.75 0 0 1 0-1.5H8zM6.5 6.5V18c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5V6.5h-11zm3-1.5h5c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5zm-.25 4h1.5v8h-1.5V9zm4 0h1.5v8h-1.5V9z"
          ></path>
        </svg>
        <span>Delete</span>
      </MonoButton>
      <MonoButton className="btn--present" onClick={handlePresentClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12.75 4H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-7.23l3.99 3.7a.75.75 0 0 1-1.02 1.1L12 18.33 8.26 21.8a.75.75 0 1 1-1.02-1.1l4-3.7H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h7.25V2.75a.75.75 0 1 1 1.5 0V4zM4 5.5a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h16a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5H4zM10 8l4.5 2.5L10 13V8z"
          ></path>
        </svg>
        <span>Present</span>
      </MonoButton>
    </div>
  );
};

export default TaskBar;

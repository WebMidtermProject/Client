import React from "react";

import "./css/TaskBar.css";

const TaskBar = (props) => {
  const presentationId = props.presentationId;
  const groupId = props.groupId;

  const handlePresentClick = () => {
    window.location.replace(`/group/${groupId}/present/${presentationId}`);
  };

  const handleDeleteClick = () => {};

  return (
    <div className="task-bar">
      <a className="task-bar__title" href="/">
        KAHOOT DUPE
      </a>
      <div className="task-bar__function">
        <input
          className="btn-delete"
          type="button"
          value="Delete"
          onClick={handleDeleteClick}
        />
        <input
          className="btn-present"
          type="button"
          value="Present"
          onClick={handlePresentClick}
        />
      </div>
    </div>
  );
};

export default TaskBar;

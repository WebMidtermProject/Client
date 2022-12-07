import React from "react";

import "./css/TaskBar.css";

const TaskBar = () => {
  return (
    <div className="task-bar">
      <a className="task-bar__title" href="/">
        KAHOOT DUPE
      </a>
      <div className="task-bar__function">
        <input
          className="btn-present"
          type="button"
          value="Present"
          /*               onClick={handleLogoutClick} */
        />
      </div>
    </div>
  );
};

export default TaskBar;

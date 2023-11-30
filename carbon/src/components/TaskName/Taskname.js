// TaskName.js

import React from 'react';
import './TaskName.css';

const TaskName = ({ name }) => {
  return (
    <div className="task-name">
      {name}
    </div>
  );
};

export default TaskName;
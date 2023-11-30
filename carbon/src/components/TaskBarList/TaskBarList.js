/* TaskBarList.js */

import React from 'react';
import TaskBar from './TaskBar/TaskBar';

const TaskBarList = ({ tasks }) => {
  return (
    <ul className="task-bar-list">
      {tasks.map((task, index) => (
        <li key={index}>
          <TaskBar headline={task.headline} />
        </li>
      ))}
    </ul>
  );
};

export default TaskBarList;
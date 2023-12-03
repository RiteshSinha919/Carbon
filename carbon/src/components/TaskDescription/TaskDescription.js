/* TaskDescription.js */

import React from 'react';

const TaskDescription = ({ description }) => {
  return (
    <div className="task-description">
      {description}
    </div>
  );
};

export default TaskDescription;
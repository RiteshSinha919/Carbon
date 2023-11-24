import React, { useState } from 'react';
import './AllocatedTime.css'; // Updated import statement

const AllocatedTime = ({ onTimeChange, onTaskChange }) => {
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedTask, setSelectedTask] = useState('');

  const handleTimeChange = (event) => {
    const newTime = event.target.value;
    setSelectedTime(newTime);
    onTimeChange(newTime); // Notify parent component about the time change
  };

  const handleTaskChange = (event) => {
    const newTask = event.target.value;
    setSelectedTask(newTask);
    onTaskChange(newTask); // Notify parent component about the task change
  };

  return (
    <div>
      <label htmlFor="allocatedTime">Allocated Time:</label>
      <input
        type="datetime-local"
        id="allocatedTime"
        name="allocatedTime"
        value={selectedTime}
        onChange={handleTimeChange}
        style={{ width: '200px' }} // Set a specific width for the time input
      />

      <label htmlFor="task">Task:</label>
      <input
        type="text"
        id="task"
        name="task"
        value={selectedTask}
        onChange={handleTaskChange}
        style={{ width: '200px' }} // Set a specific width for the task input
      />
    </div>
  );
};

export default AllocatedTime;

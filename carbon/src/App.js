import React, { useState } from 'react';
import AllocatedTime from './components/AllocatedTime/AllocatedTime';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [allocatedTime, setAllocatedTime] = useState('');

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleTimeChange = (newTime) => {
    setAllocatedTime(newTime);
  };

  const handleAddTask = () => {
    // Handle adding the task to your to-do list with the allocated time
    // You can use the 'task' and 'allocatedTime' states here.
  };

  return (
    <div>
      <h1>Todo App</h1>
      <AllocatedTime
        onTimeChange={handleTimeChange}
        onTaskChange={handleTaskChange} // Pass the task change handler to AllocatedTime
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TodoApp;

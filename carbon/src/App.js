// src/App.js
import React, { useState } from 'react';
import AllocatedTime from './components/AllocatedTime/AllocatedTime';
import Assignee from './components/Assignee/Assignee'; // Import the Assignee component

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [allocatedTime, setAllocatedTime] = useState('');
  const [assignee, setAssignee] = useState(''); // Add a state for the assignee

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleTimeChange = (newTime) => {
    setAllocatedTime(newTime);
  };

  const handleAssigneeChange = (newAssignee) => { // Add a handler for the assignee change
    setAssignee(newAssignee);
  };
  
  const handleAddTask = () => {
    // Add your task-adding logic here
  };

  // ...

  return (
    <div>
      <h1>Todo App</h1>
      <AllocatedTime
        onTimeChange={handleTimeChange}
        onTaskChange={handleTaskChange}
      />
      <Assignee onAssigneeChange={handleAssigneeChange} /> {/* Use the Assignee component */}
     /*<button onClick={handleAddTask}>Add Task</button>*/
    </div>
  );
};

export default TodoApp;
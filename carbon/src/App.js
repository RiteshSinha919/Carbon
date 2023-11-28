// src/App.js
import React, { useState } from 'react';
import AllocatedTime from './components/AllocatedTime/AllocatedTime';
import Assignee from './components/Assignee/Assignee'; // Import the Assignee component
import Priority from './components/Priority/Priority'; // Import the Priority component

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

  const [priority, setPriority] = useState(''); // Add a state for the priority

  const handlePriorityChange = (newPriority) => { // Add a handler for the priority change
    setPriority(newPriority);
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
      <Priority onPriorityChange={handlePriorityChange} /> {/* Use the Priority component */}
     /*<button onClick={handleAddTask}>Add Task</button>*/
    </div>
  );
};

export default TodoApp;
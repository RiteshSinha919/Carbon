import React, { useState } from 'react';
import './Priority.css';

const Priority = ({ onPriorityChange }) => {
  const [selectedPriority, setSelectedPriority] = useState('');

  const handlePriorityChange = (event) => {
    const newPriority = event.target.value;
    setSelectedPriority(newPriority);
    onPriorityChange(newPriority);
  };

  return (
    <div>
      <label htmlFor="priority">Priority:</label>
      <input
        type="text"
        id="priority"
        name="priority"
        value={selectedPriority}
        onChange={handlePriorityChange}
        style={{ width: '200px' }}
      />
    </div>
  );
};

export default Priority;
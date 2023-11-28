import React, { useState } from 'react';

const Assignee = ({ onAssigneeChange }) => {
  const [selectedAssignee, setSelectedAssignee] = useState('');

  const handleAssigneeChange = (event) => {
    const newAssignee = event.target.value;
    setSelectedAssignee(newAssignee);
    onAssigneeChange(newAssignee); // Notify parent component about the assignee change
  };

  return (
    <div>
      <label htmlFor="assignee">Assignee:</label>
      <input
        type="text"
        id="assignee"
        name="assignee"
        value={selectedAssignee}
        onChange={handleAssigneeChange}
        style={{ width: '200px' }} // Set a specific width for the assignee input
      />
    </div>
  );
};

export default Assignee;
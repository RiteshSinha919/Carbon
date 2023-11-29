import "./Priority.css";
import React, { useState } from 'react';
import FloatingList from '../FloatingList/FloatingList';

const Priority = (props) => {
  const { flag } = props;
  const priorityFlag = process.env.PUBLIC_URL + `/images/priority/${flag}.png`;
  const [isListOpen, setListOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleImageClick = () => {
    setListOpen(!isListOpen);
  };

  const handleCloseList = () => {
    setListOpen(false);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="priority-container">
      <img className="priority" src={priorityFlag} alt="priority" onClick={handleImageClick} />
      <FloatingList
        isOpen={isListOpen}
        onClose={handleCloseList}
        onSelect={handleSelectOption}
      />
      {selectedOption && (
        <p>You selected: {selectedOption}</p>
      )}
    </div>
  );
};

export default Priority;

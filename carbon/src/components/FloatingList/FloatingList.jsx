import React, { useRef, useEffect } from 'react';

const FloatingList = ({ isOpen, onClose, onSelect }) => {
  const listRef = useRef(null);

  const handleItemClick = (item) => {
    onSelect(item);
    onClose();
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (listRef.current && !listRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, [onClose]);

  return isOpen ? (
    <div className="floating-list" ref={listRef}>
      <ul>
        <li onClick={() => handleItemClick('Option 1')}>Option 1</li>
        <li onClick={() => handleItemClick('Option 2')}>Option 2</li>
        <li onClick={() => handleItemClick('Option 3')}>Option 3</li>
      </ul>
    </div>
  ) : null;
};

export default FloatingList;
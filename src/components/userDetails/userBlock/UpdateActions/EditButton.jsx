
import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';

const EditButton = ({ onEditClick }) => {
  const handleEditClick = () => {
    onEditClick();
  };

  return (
    <button className="icon-button" onClick={handleEditClick}>
      <AiOutlineEdit className="edit-icon" />
    </button>
  );
};

export default EditButton;

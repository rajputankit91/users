
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteUserData } from '../../../../../Redux/userActions';

// Component for rendering a delete button with confirmation
const DeleteButton = ({ userId }) => {
  const dispatch = useDispatch();

// Handle click event on the delete button and adding an additional confirmation before deleting the user
  const handleDeleteClick = () => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch(deleteUserData(userId));
    }
  };
  
// Render the delete button component
  return (
    <button className="icon-button" onClick={handleDeleteClick}>
      <AiFillDelete className="delete-icon" />
    </button>
  );
};

export default DeleteButton;


import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteUserData } from '../../../../Redux/userSlice';


const DeleteButton = ({ userId }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch(deleteUserData(userId));
    }
  };

  return (
    <button className="icon-button" onClick={handleDeleteClick}>
      <AiFillDelete className="delete-icon" />
    </button>
  );
};

export default DeleteButton;

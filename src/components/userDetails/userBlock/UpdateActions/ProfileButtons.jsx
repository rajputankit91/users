import "./ActionButton.css"
import React, { useState } from 'react';
import LikeButton from './LikeButton';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import EditUserModal from '../../EditUserModal/EditUserModal';
import { createPortal } from 'react-dom';


// Component for rendering profile action buttons
const ProfileButtons = ({ userId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

// Access the root element to create a portal for the modal  
  const modalContainer = document.getElementById('root');

    // Render the profile action buttons and modal
  return (
    <div className="user-block-buttons">
      <ul>
        <li className="action-item">
          <LikeButton userId={userId} />
        </li>
        <li className="action-item">
          <EditButton onEditClick={handleEditClick} />
        </li>
        <li className="action-item">
          <DeleteButton userId={userId} />
        </li>
      </ul>

    {/* Render the EditUserModal as a portal if the modal is open */}      
      {isModalOpen &&
        createPortal(
          <EditUserModal onClose={handleCloseModal} userId={userId} />,
          modalContainer
        )}
    </div>
  );
};

export default ProfileButtons;

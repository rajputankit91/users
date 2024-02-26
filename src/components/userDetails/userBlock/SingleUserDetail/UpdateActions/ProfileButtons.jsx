
import React, { useState } from 'react';
import LikeButton from './LikeButton';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import EditUserModal from '../../editInfoModal/EditInfoModal';

const ProfileButtons = ({ userId, userData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
      {isModalOpen && <EditUserModal onClose={handleCloseModal} userId={userId} />}
    </div>
  );
};

export default ProfileButtons;

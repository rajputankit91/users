import React, { useEffect, useState } from 'react';
import { AiOutlineHeart, AiOutlineEdit, AiOutlineDelete, AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserData, selectLikedUsers, toggleLike } from '../Redux/userSlice';
import { IoIosHeart } from 'react-icons/io';
import EditUserModal from './userBlock/editInfoModal/EditInfoModal';


const UserBlockButtons = ({userId, userData}) => {

    const dispatch = useDispatch();
    const likedUsers = useSelector(selectLikedUsers);
    const [isLiked, setIsLiked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
   
    const handleLikeClick = () => {
      dispatch(toggleLike(userId));
      setIsLiked(!isLiked)
      console.log(likedUsers,"ye hai liked usewrs")
    };
  
    const handleDeleteClick = () => {
      if (window.confirm('Are you sure you want to delete this user?')) {
        dispatch(deleteUserData(userId));
      }
    };

    useEffect(() => {
        
        setIsLiked(likedUsers.some((user) => user.id === userId));
        console.log('Liked Users:', likedUsers);

      }, [likedUsers, userId]);
    
  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const Button = () =>{
    return (
      <button className="icon-button"></button>
    )
  }
  return (
    <div className="user-block-buttons">
      <ul >
        <li className="action-item">
          <span>
            <Button onClick={handleLikeClick}>
              {isLiked? (<IoIosHeart className="heart-icon"/>):
              (<AiOutlineHeart  className="heart-icon"/>)} 
            </Button>
          </span>
        </li>

        <li className="action-item">
          <span>
            <Button onClick={handleEditClick}>
              <AiOutlineEdit className="edit-icon" />
            </Button>
          </span>
        </li>

        {isModalOpen && <EditUserModal onClose={handleCloseModal}  userId={userId}/>}
        <li className="action-item">
          <span>
            <Button onClick={handleDeleteClick}>
              <AiFillDelete className="delete-icon" />
            </Button>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default UserBlockButtons ;

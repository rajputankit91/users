import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosHeart } from 'react-icons/io';
import { AiOutlineHeart } from 'react-icons/ai';
import { selectLikedUsers } from '../../../../../Redux/userSlice';
import { toggleLike } from '../../../../../Redux/userActions';

// Component for rendering a like button  Dispatch the toggleLike action with the user ID and Update local state to reflect the new liked status
const LikeButton = ({ userId }) => {
  const dispatch = useDispatch();
  const likedUsers = useSelector(selectLikedUsers);
  const [isLiked, setIsLiked] = useState(false);

// Handle click event on the like button
  const handleLikeClick = () => {
    dispatch(toggleLike(userId));
    setIsLiked(!isLiked);
  };

// Effect to update the liked status when likedUsers or userId changes
  useEffect(() => {
    setIsLiked(likedUsers.some((user) => user.id === userId));
  }, [likedUsers, userId]);

  return (
    <button className="icon-button" onClick={handleLikeClick}>
      {/* Conditional rendering based on the liked status */}
      {isLiked ? <IoIosHeart className="heart-icon" /> : <AiOutlineHeart className="heart-icon" />}
    </button>
  );
};

export default LikeButton;

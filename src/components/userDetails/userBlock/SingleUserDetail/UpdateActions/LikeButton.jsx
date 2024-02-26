import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLikedUsers, toggleLike } from '../../../../Redux/userSlice';
import { IoIosHeart } from 'react-icons/io';
import { AiOutlineHeart } from 'react-icons/ai';


const LikeButton = ({ userId }) => {
  const dispatch = useDispatch();
  const likedUsers = useSelector(selectLikedUsers);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    dispatch(toggleLike(userId));
    setIsLiked(!isLiked);
    console.log(likedUsers)
  };

  useEffect(() => {
    console.log(likedUsers)
    setIsLiked(likedUsers.some((user) => user.id === userId));
  }, [likedUsers, userId]);

  return (
    <button className="icon-button" onClick={handleLikeClick}>
      {isLiked ? <IoIosHeart className="heart-icon" /> : <AiOutlineHeart className="heart-icon" />}
    </button>
  );
};

export default LikeButton;

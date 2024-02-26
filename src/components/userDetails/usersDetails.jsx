
import { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleUseDetails from './userBlock/SingleUseDetails';
import { selectUserData, selectUserError, selectUserStatus } from '../../../Redux/userSlice';
import { fetchUserData } from '../../../Redux/userActions';
import Loader from '../../common/loader/loader';


// Component for rendering user details
const UsersDeatils = () => {

 const dispatch = useDispatch()
  const userData = useSelector(selectUserData);
  const userStatus = useSelector(selectUserStatus);
  const userError = useSelector(selectUserError);
 
 // Fetch user data on component mount
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);


  // Render loading state if data is still being fetched
  if (userStatus === 'loading') {
    return <p><Loader/></p>;
  }

  // Render error message if data fetching failed
  if (userStatus === 'failed') {
    return <p>Error: {userError}</p>;
  }

  return (
    <div className='user-details' >
      {userData.length > 0 ?
         userData.map((user, index) => (
         <SingleUseDetails  key={index} userData={user} />
      )): (
        <Loader/>
      )
     
    }
    </div>
  );
};

export default UsersDeatils;












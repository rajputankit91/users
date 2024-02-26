import { useEffect }  from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, selectUserData, selectUserError, selectUserStatus } from '../Redux/userSlice';
import UserDataBlock from './userBlock/userDataBlock';


const UserDeatils = () => {

 const dispatch = useDispatch()
  const userData = useSelector(selectUserData);
  const userStatus = useSelector(selectUserStatus);
  const userError = useSelector(selectUserError);
 

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  console.log(userData)

  if (userStatus === 'loading') {
    return <p>Loading...</p>;
  }

  if (userStatus === 'failed') {
    return <p>Error: {userError}</p>;
  }

  return (
    <div className='user-details' >
         {userData.map((user, index) => (
        <UserDataBlock  key={index} userData={user} />
      ))}
     
    </div>
  );
};

export default UserDeatils;












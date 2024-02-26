import React from 'react';
import ListItems from './ListItems/ListItems';
import ProfileButtons from './UpdateActions/ProfileButtons';


const SingleUseDetails = ({ userData }) => {
  return (
    // Container for user details block having info imgae and action buttons
    <div className='user-block'>
       <ListItems userData={userData}/>
       <ProfileButtons userId = {userData.id}/>
    </div>
  );
};

export default SingleUseDetails;
import React from 'react';
import ListInfo from './ListInfo';
import UserImg from './UserImg';


const ListItems = ({ userData }) => {


  return (
    <div className='user-block'>
      <UserImg imgUrl={userData.image}/>
      <ListInfo userData={userData}/>
    </div>
  );
};

export default ListItems;
import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { IoIosGlobe } from "react-icons/io";
import UserBlockButtons from '../userButtons';

const UserDataBlock = ({ userData }) => {


  return (
    <div className='user-block'>
      <div className='user-img'>
        <img src={userData.image} alt="User" style={{ width: '200px', height: '200px' }} />
      </div>
      <div className='user-detail-content'>
        <h3>{userData.name}</h3>
        <div className='contact-info-item'><span><AiOutlineMail /></span><p>{userData.email}</p></div>
        <div className='contact-info-item'><span><AiOutlinePhone /></span><p>{userData.phone}</p></div>
        <div className='contact-info-item'><span><IoIosGlobe /></span><p>{userData.website}</p></div>
      </div>
      <UserBlockButtons userId = {userData.id} userData={userData}/>
    </div>
  );
};

export default UserDataBlock;
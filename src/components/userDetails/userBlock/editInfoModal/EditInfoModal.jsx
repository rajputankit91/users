import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserData } from '../../../Redux/userSlice';
import "./EditUserModal.css"
import { AiOutlineClose } from 'react-icons/ai';

const EditUserModal = ({ onClose, userId }) => {
  const dispatch = useDispatch();
  const modalContentRef = useRef();  
  const userData = useSelector((state) => state.user.data.find((user) => user.id === userId));

  const [editedUserData, setEditedUserData] = useState({
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
    website: userData.website,
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    emptyFields: '',
  });

  useEffect(() => {
    setErrors({
      name: '',
      email: '',
      phone: '',
      website: '',
      emptyFields: '',
    });
  }, [editedUserData]);

  const isValidName = (name) => {
    return name.length ;
  };

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    const newErrors = {};
    
    if (name === 'name' && value.length === 0 ) {
      e.target.value = "";
      newErrors.name = 'Name is required';
    }
    
    if (name === 'email' && value.trim() === '') {
      newErrors.email = 'Email is required';
    }   
    
    if (name === 'phone' && value.trim() === '') {
      newErrors.phone = 'Phone is required';
    }

    if (name === 'website' && value.trim() === '') {
      newErrors.website = 'Website is required';
    }

    if (Object.values(newErrors).every((error) => error === '')) {
      setEditedUserData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    setErrors({
      ...errors,
      ...newErrors,
      emptyFields: '',
    });
    
  },[errors])

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (editedUserData.name.trim() === '') {
      newErrors.name = 'Name is required';
    }

    if (editedUserData.email.trim() === '') {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(editedUserData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (editedUserData.phone.trim() === '') {
      newErrors.phone = 'Phone is required';
    }

    if (editedUserData.website.trim() === '') {
      newErrors.website = 'Website is required';
    }

    if (Object.values(newErrors).some(value => value !== '')) {
      setErrors({
        ...newErrors,
        emptyFields: 'All fields are required',
      });
      return;
    }

    dispatch(updateUserData({ userId, editedUserData }));
    onClose();
  };

  const handleClose = () => {
    setEditedUserData({
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      website: userData.website,
    });
    onClose();
  }

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      handleClose();
    }
  };
  

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" ref={modalContentRef}>
        <div className='form-header'>
          <h3>Edit User</h3>
          <span onClick={onClose}><AiOutlineClose /></span>
        </div>

        <form onSubmit={handleSubmit} className='user-data-form'>
          <div className='label-input-field'>
            <label><span>*</span>Name :</label>
            <div className='input-field'>
              <input  className={errors.name?`input-error` : ""} type="text" name="name" value={editedUserData.name} onChange={handleInputChange} />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
          </div>
          <div className='label-input-field'>
            <label><span>*</span>Email :</label>
            <div className='input-field'>
              <input className={errors.email?`input-error` : ""} type="text" name="email" value={editedUserData.email} onChange={handleInputChange} />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
          </div>
          <div className='label-input-field'>
            <label><span>*</span>Phone :</label>
            <div className='input-field'>
              <input  className={errors.phone?`input-error` : ""}type="text" name="phone" value={editedUserData.phone} onChange={handleInputChange} />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>
          </div>
          <div className='label-input-field'>
            <label><span>*</span>Website :</label>
            <div className='input-field'>
              <input  className={errors.website?`input-error` : ""} type="text" name="website" value={editedUserData.website} onChange={handleInputChange} />
              {errors.website && <p className="error">{errors.website}</p>}
            </div>
          </div>
          
          <div className="form-footer">
            <button type="submit" className='submit-button'>OK</button>
            <button onClick={handleClose} className="close-button">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;

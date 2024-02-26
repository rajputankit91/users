import React, { useCallback, useRef, useState } from "react";
import "./EditUserModal.css";
import { updateUserData } from "../../../../Redux/userActions.js";
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../../common/Inputfield/inputField.jsx";
import Modal from "../../../common/modal/modal.jsx";

const EditUserModal = ({ onClose, userId }) => {
  // Redux setup
  const dispatch = useDispatch();
  const modalContentRef = useRef();

  // Fetch user data from Redux store
  const userData = useSelector((state) => state.user.data.find((user) => user.id === userId));

  // State for edited user data and form errors
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
  });

  // Handle input change with validation
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    const newErrors = {};

    if (value.trim() === '') {
      newErrors[name] = 'This field is required';
    } else if (name === 'email' && !validateEmail(value)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setEditedUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors({
      ...errors,
      [name]: newErrors[name] || '',
    });
  }, [errors]);

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validate each field in editedUserData
    Object.keys(editedUserData).forEach((field) => {
      if (editedUserData[field].trim() === '') {
        newErrors[field] = 'This field is required';
      } else if (field === 'email' && !validateEmail(editedUserData[field])) {
        newErrors.email = 'Please enter a valid email address';
      }
    });

    setErrors(newErrors);

    // If there are errors, stop submission
    if (Object.values(newErrors).some(value => value !== '')) {
      return;
    }

    // Dispatch updateUserData action
    dispatch(updateUserData({ userId, editedUserData }));
    onClose();
  };

  // Reset editedUserData and close modal
  const handleClose = () => {
    setEditedUserData({
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      website: userData.website,
    });
    onClose();
  };

  // Close modal if clicking on the overlay
  // const handleOverlayClick = (e) => {
  //   if (e.target.classList.contains('modal-overlay')) {
  //     handleClose();
  //   }
  // };

  return (
    <Modal onClose={onClose} title="Edit User">
    <form onSubmit={handleSubmit} className='user-data-form'>
      <InputField label="Name" name="name" value={editedUserData.name} error={errors.name} onChange={handleInputChange} />
      <InputField label="Email" name="email" value={editedUserData.email} error={errors.email} onChange={handleInputChange} />
      <InputField label="Phone" name="phone" value={editedUserData.phone} error={errors.phone} onChange={handleInputChange} />
      <InputField label="Website" name="website" value={editedUserData.website} error={errors.website} onChange={handleInputChange} />
      <div className="form-footer">
        <button onClick={handleClose} className="close-button">Cancel</button>
        <button type="submit" className='submit-button'>OK</button>
      </div>
    </form>
  </Modal>
  );
};

export default EditUserModal;

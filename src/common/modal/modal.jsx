
import "./modal.css"
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ onClose, children, title }) => {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal')) {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className='modal-header'>
          <h3>{title}</h3>
          <span onClick={onClose}><AiOutlineClose /></span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;

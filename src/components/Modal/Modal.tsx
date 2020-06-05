import React from 'react';
import './Modal.scss';

interface IProps {
  confirmText: string;
  showModal: boolean;
  text: string;
  onClose: () => void;
}

const Modal: React.FC<IProps> = ({ confirmText, onClose, showModal, text }) => {
  if (!showModal) {
    return null;
  }
  return (
    <div className="modal">
      {text}
      <button className="confirm-btn" onClick={onClose}>{confirmText}</button>
    </div>
  );
}

export default Modal;

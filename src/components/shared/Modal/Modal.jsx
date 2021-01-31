import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './style.scss';

function Modal({
  isOpen = false,
  handleClose = () => null,
  children,
  clickOutsideToClose = true,
  width = '80%',
  maxWidth = '400px',
  height = '300px',
}) {
  const modalId = 'react-common-modal';
  const [modalRoot] = useState(() => {
    const modalDiv = document.createElement('div');
    modalDiv.setAttribute('id', modalId);
    return modalDiv;
  });

  useEffect(() => {
    let isAppend = false;
    document.body.appendChild(modalRoot);
    isAppend = true;
    return () => {
      if (modalRoot && isAppend) document.body.removeChild(modalRoot);
    };
  }, []);

  const closeModal = () => {
    handleClose();
    document.body.removeChild(modalRoot);
  };

  const renderModal = (_children) => (
    <div className="common-modal">
      <div
        className="modal-background"
        onClick={() => clickOutsideToClose && closeModal()}
      />
      <div
        className="modal-content-container"
        style={{ width, height, maxWidth }}
      >
        <span className="close-icon" onClick={closeModal}>
          &times;
        </span>
        {_children}
      </div>
    </div>
  );

  if (!isOpen) return null;
  return createPortal(renderModal(children), modalRoot);
}

export default Modal;

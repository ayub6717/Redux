import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from '../redux/slices/modalSlice';

const ModalComponent = () => {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const content = useSelector((state) => state.modal.content);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal('Modal content goes here'));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      {isOpen && (
        <div>
          <div>{content}</div>
          <button onClick={handleCloseModal}>Close Modal</button>
        </div>
      )}
    </div>
  );
};

export default ModalComponent;

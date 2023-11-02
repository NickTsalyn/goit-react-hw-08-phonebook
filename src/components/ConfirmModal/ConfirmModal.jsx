import React, { useEffect, useRef } from 'react';
import Modal from 'react-modal';
import { Btn, BtnDelete, Container, Msg, Name, Wrapper } from './ConfirmModal.styled';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';

const customStyles = {
    overlay: {
        background: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(2px)'
    },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(255, 255, 255, 0.3)',
  },
};

Modal.setAppElement('#root');

export const ConfirmModal = ({ id, name, isOpen, closeModal }) => {
    const subtitleRef = useRef();
    const dispatch = useDispatch()

    useEffect(() => {
      if (subtitleRef.current) {
        subtitleRef.current.style.color = '#f00';
      }
    }, [isOpen]);


  return (
    <>
     <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal"
    >
        <Container>
        <Msg>
          Are you sure you want to delete the contact: <Name>{name}</Name>?
        </Msg>
        <Wrapper>
          <Btn type="button" onClick={closeModal}>
            Cancel
          </Btn>
          <BtnDelete type="button" onClick={() => dispatch(deleteContacts(id))}>
            Delete
          </BtnDelete>
        </Wrapper>
      </Container>
    </Modal>
      
    </>
  );
};
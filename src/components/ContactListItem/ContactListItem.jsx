import { ContactContainer, ContactItem } from './ContactListItem.styled';
import { Button } from 'components/Button/Button';
import { useState } from 'react';
import { ConfirmModal } from 'components/ConfirmModal/ConfirmModal';

export const ContactListItem = ({id, name, number}) => {


  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };




  return (
    <>
        <ContactContainer key={id}>
          <ContactItem>
            {name}: {number}
          </ContactItem>
          <Button onClick={() => openModal()}>
            Delete
          </Button>
          {modalIsOpen && <ConfirmModal id={id} name={name} isOpen={modalIsOpen} closeModal={closeModal} />}
        </ContactContainer>
    </>
  );
};

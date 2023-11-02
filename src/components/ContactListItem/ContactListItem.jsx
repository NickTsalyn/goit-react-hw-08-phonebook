import { useSelector } from 'react-redux';
// import { deleteContacts } from 'redux/contacts/operations';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { ContactContainer, ContactItem } from './ContactListItem.styled';
import { Button } from 'components/Button/Button';
import { useState } from 'react';
import { ConfirmModal } from 'components/ConfirmModal/ConfirmModal';

export const ContactListItem = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {filteredContacts.map(contact => (
        <ContactContainer key={contact.id}>
          <ContactItem>
            {contact.name}: {contact.number}
          </ContactItem>
          <Button onClick={() => openModal()}>
            Delete
          </Button>
          {modalIsOpen && <ConfirmModal id={contact.id} name={contact.name} isOpen={modalIsOpen} closeModal={closeModal} />}
        </ContactContainer>
      ))}
    </>
  );
};

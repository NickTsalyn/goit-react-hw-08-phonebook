import { ContactContainer, ContactItem } from './ContactListItem.styled';
import { Button } from 'components/Button/Button';
import { useState } from 'react';
import { ConfirmModal } from 'components/ConfirmModal/ConfirmModal';
import { useTranslation } from 'react-i18next';

export const ContactListItem = ({id, name, number}) => {
  const {t} = useTranslation('global')
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
            {t('contacts.list.delete')}
          </Button>
          {modalIsOpen && <ConfirmModal id={id} name={name} isOpen={modalIsOpen} closeModal={closeModal} />}
        </ContactContainer>
    </>
  );
};

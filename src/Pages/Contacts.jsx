import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactTitle, HomeTitle } from 'components/HomeInfo/HomeInfo.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {

    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div>
        <HomeTitle>Phonebook</HomeTitle>
        <ContactForm />
      </div>
      <div>
        <ContactTitle>Contacts</ContactTitle>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};

export default Contacts;

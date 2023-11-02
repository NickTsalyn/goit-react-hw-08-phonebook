// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { ContactForm } from './ContactForm/ContactForm';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactTitle, HomeTitle } from 'components/HomeInfo/HomeInfo.styled';

const Contacts = () => {
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

import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactTitle, HomeTitle } from 'components/HomeInfo/HomeInfo.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { useTranslation } from 'react-i18next';

const Contacts = () => {
  const { t } = useTranslation('global');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div>
        <HomeTitle>{t('contacts.title')}</HomeTitle>
        <ContactForm />
      </div>
      <div>
        <ContactTitle>{t('contacts.list.title')}</ContactTitle>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};

export default Contacts;

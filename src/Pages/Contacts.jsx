import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactTitle, HomeTitle } from 'components/HomeInfo/HomeInfo.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { useTranslation } from 'react-i18next';

const Contacts = () => {
  const { t, i18n } = useTranslation('global');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
 }, [i18n, i18n.language]);
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

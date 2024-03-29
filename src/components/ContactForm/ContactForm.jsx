import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';

import {
  ButtonStyled,
  FieldForm,
  FormWrapper,
  Label,
} from './ContactForm.styled';
import { addContacts } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { useTranslation } from 'react-i18next';

const FormValidSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required'),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required'),
});

export const ContactForm = () => {
  const {t} = useTranslation("global")
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const isDublicate = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isDublicate) {
      alert('This name already exists. Please enter a different name.');
      return;
    }

    dispatch(addContacts(newContact));
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={FormValidSchema}
      onSubmit={handleSubmit}
    >
      <FormWrapper>
        <Label htmlFor="name">
          {t('contacts.form.name')}
          <FieldForm type="text" name="name" />
        </Label>
        <Label htmlFor="number">
        {t('contacts.form.number')}
          <FieldForm type="tel" name="number" />
        </Label>

        <ButtonStyled type="submit">{t('contacts.form.add')}</ButtonStyled>
      </FormWrapper>
    </Formik>
  );
};

import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {Form, FormInput, Label } from './RegisterForm.styled';
import { useTranslation } from 'react-i18next';


// const captchaKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"


export const RegisterForm = () => {
  const { t } = useTranslation('global');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };


  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        {t('register.username')}
        <FormInput type="text" name="name" />
      </Label>
      <Label>
        {t('register.email')}
        <FormInput type="email" name="email" />
      </Label>
      <Label>
        {t('register.password')}
        <FormInput type="password" name="password" />
      </Label>
    </Form>
  );
};

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { ButtonStyled, Form, FormInput, Label } from './LoginForm.styled';
import { useTranslation } from 'react-i18next';

export const LoginForm = () => {
  const { t } = useTranslation('global');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        {t('login.email')}
        <FormInput type="email" name="email" />
      </Label>
      <Label>
        {t('login.password')}
        <FormInput type="password" name="password" />
      </Label>
      <ButtonStyled type="submit">{t('home.login')}</ButtonStyled>
    </Form>
  );
};

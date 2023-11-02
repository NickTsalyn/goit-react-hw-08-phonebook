import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { ButtonStyled, Form, FormInput, Label } from './LoginForm.styled';

export const LoginForm = () => {
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
        Email
        <FormInput type="email" name="email" />
      </Label>
      <Label>
        Password
        <FormInput type="password" name="password" />
      </Label>
      <ButtonStyled type="submit">Log In</ButtonStyled>
    </Form>
  );
};

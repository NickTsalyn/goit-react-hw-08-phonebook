import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { ButtonStyled, Form, FormInput, Label } from './RegisterForm.styled';

export const RegisterForm = () => {
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
        Username
        <FormInput type="text" name="name" />
      </Label>
      <Label>
        Email
        <FormInput type="email" name="email" />
      </Label>
      <Label>
        Password
        <FormInput type="password" name="password" />
      </Label>
      <ButtonStyled type="submit">Register</ButtonStyled>
    </Form>
  );
};

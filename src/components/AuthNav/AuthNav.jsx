import { NavLink } from 'react-router-dom';
import { AuthNavWrapper } from './AuthNav.styled';
import { Button } from 'components/Button/Button';

export const AuthNav = () => {
  return (
    <AuthNavWrapper>
      <NavLink to="/register">
        <Button>Register</Button>
      </NavLink>
      <NavLink to="/login">
        <Button> Log In</Button>
      </NavLink>
    </AuthNavWrapper>
  );
};

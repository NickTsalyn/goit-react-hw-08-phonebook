import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { NavBar } from './Navigation.styled';
import { Button } from 'components/Button/Button';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavBar>
      <NavLink to="/">
        <Button>Home</Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <Button>Contacts</Button>
        </NavLink>
      )}
    </NavBar>
  );
};

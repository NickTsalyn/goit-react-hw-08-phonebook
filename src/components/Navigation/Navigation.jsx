import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { NavBar } from './Navigation.styled';
import { Button } from 'components/Button/Button';
import { useTranslation } from 'react-i18next';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const { t } = useTranslation('global');

  return (
    <NavBar>
      <NavLink to="/">
        <Button>{t('home.main')}</Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <Button>{t('home.contacts')}</Button>
        </NavLink>
      )}
    </NavBar>
  );
};

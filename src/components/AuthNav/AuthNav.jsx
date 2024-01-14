import { NavLink } from 'react-router-dom';
import { AuthNavWrapper} from './AuthNav.styled';
import { Button } from 'components/Button/Button';
import { useTranslation } from 'react-i18next';
import { SelectLanguage } from 'components/SelectLanguage/SelectLanguage';

export const AuthNav = () => {
  const [t] = useTranslation("global")



  return (
    <AuthNavWrapper>
      <NavLink to="/register">
        <Button>{t("home.register")}</Button>
      </NavLink>
      <NavLink to="/login">
        <Button>{t('home.login')}</Button>
      </NavLink>
      <SelectLanguage/>
    </AuthNavWrapper>
  );
};

import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Text, UserMenuWrapper } from './UserMenu.styled';
import { Button } from 'components/Button/Button';
import { useTranslation } from 'react-i18next';
import { SelectLanguage } from 'components/SelectLanguage/SelectLanguage';

export const UserMenu = () => {
  const { t } = useTranslation('global');
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuWrapper>
      <Text>{t('logout.text')}, {user.name}</Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        {t("logout.button")}
      </Button>
      <SelectLanguage/>
    </UserMenuWrapper>
  );
};

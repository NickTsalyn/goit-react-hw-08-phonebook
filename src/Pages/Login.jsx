import { LoginForm } from "components/LoginForm/LoginForm";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";


export const LoginPage = () => {
  const { i18n } = useTranslation('global');
  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
 }, [i18n, i18n.language]);
  return <LoginForm />;
};

export default LoginPage
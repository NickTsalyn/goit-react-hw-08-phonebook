import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Register() {
  const { i18n } = useTranslation('global');
  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
 }, [i18n, i18n.language]);
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}

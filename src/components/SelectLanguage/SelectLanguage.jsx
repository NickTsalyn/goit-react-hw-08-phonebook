import React from 'react';
import { SelectStyled } from './SelectLanguage.styled';
import { useTranslation } from 'react-i18next';

export const SelectLanguage = () => {
  const { t, i18n } = useTranslation('global');

  const handleChange = lang => {
    i18n.changeLanguage(lang);
  };

  const handleChangeLanguage = e => {
    const selectedLanguage = e.target.value;
    handleChange(selectedLanguage);
  };

  return (
    <>
      <SelectStyled onChange={handleChangeLanguage}>
        <option value="">--{t('home.chooseLanguage')}--</option>
        <option value="en">Ukrainian</option>
        <option value="ua">English</option>
      </SelectStyled>
    </>
  );
};

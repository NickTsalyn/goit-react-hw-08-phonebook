import React from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';

const options = [
  { value: 'en', label: 'Ukrainian' },
  { value: 'ua', label: 'English' },
  { value: 'ar', label: 'Arabic' },
  { value: 'he', label: 'Hebrew' }
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: 'var(--accent)',
    color: state.isFocused ? 'var(--accent)' : 'var(--text)',
    border: 'none',
    borderRadius: '25px',
    boxShadow:  'none',
    '&:hover': {
      backgroundColor: 'var(--text)',
      color: 'var(--accent)'
    }
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? 'var(--text)' : 'var(--accent)',
    color: state.isSelected ? 'var(--accent)' : 'var(--text)',
    '&:hover': {
      backgroundColor: 'var(--text)',
      color: 'var(--accent)'
    }
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'var(--text)',
    '&:hover': {
        color: 'var(--accent)'
      }
})
};

const CustomDropdown = () => {
    const { i18n } = useTranslation('global');


  const handleChangeLanguage = selectedOption => {
    i18n.changeLanguage(selectedOption.value);
  };
  return (
    <Select
      options={options}
      styles={customStyles}
      onChange={handleChangeLanguage}
      placeholder="--Choose Language--"
    />
  );
};

export default CustomDropdown;

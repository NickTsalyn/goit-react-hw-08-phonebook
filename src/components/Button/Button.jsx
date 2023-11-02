import React from 'react';
import { ButtonStyled } from './Button.styled';


export const Button = ({ children, ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

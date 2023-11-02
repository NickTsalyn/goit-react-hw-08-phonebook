import styled from '@emotion/styled';
import { Button } from 'components/Button/Button';

export const Form = styled.form`
  margin-top: 30px;
`;

export const ButtonStyled = styled(Button)`
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const FormInput = styled.input`
  display: block;
  width: inherit;
  margin-bottom: 10px;
  margin-top: 7px;
  margin-right: auto;
  margin-left: auto;
  font-size: 20px;
  color: var(--text);
  border: var(--text);
  background-color: var(--section);
  outline: transparent;
  border-radius: 20px;
  padding: 10px 20px;

  &:hover,
  &:focus {
    outline: 2px solid var(--accent);
    box-shadow: 1px 1px 1px var(--accent);
  }
`;

export const Label = styled.label`
  color: var(--section);

  &:hover,
  &:focus {
    color: var(--accent);
  }
`;
import styled from '@emotion/styled';

export const AuthNavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ButtonStyled = styled.button`
  display: block;
  background-color: var(--accent);
  color: var(--text);
  font-weight: 500;
  font-size: 15px;
  padding: 10px;
  border: transparent;
  border-radius: 25px;

  &:focus,
  &:hover {
    background-color: var(--text);
    color: var(--accent);
    outline: none;
  }
`;



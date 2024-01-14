import styled from "styled-components";
// import { GrLanguage } from "react-icons/gr";


export const SelectStyled = styled.select`
  display: block;
  background-color: var(--accent);
  color: var(--text);
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  padding: 10px;
  border: transparent;
  border-radius: 25px;
  margin-right: 10px;

  &:focus,
  &:hover {
    background-color: var(--text);
    color: var(--accent);
    outline: none;
  }
`;


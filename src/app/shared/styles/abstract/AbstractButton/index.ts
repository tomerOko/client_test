import styled from 'styled-components/macro';

export const AbstractButton = styled.button`
  outline: none;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }

  &:active {
    opacity: 0.4;
  }
`;

import styled from 'styled-components/macro';

export const AbstractButton = styled.button`
  outline: none;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;

  padding: 19px 38.5px;
  width: 161px;
  height: 58px;
  border: 1px solid rgba(0, 0, 0, 0.75);
  border-radius: 35px;

  /* font-family: 'Open Sans'; */
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }

  &:active {
    opacity: 0.4;
  }
`;

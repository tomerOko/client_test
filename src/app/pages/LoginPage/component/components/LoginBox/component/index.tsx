import * as React from 'react';
import styled from 'styled-components';

export function LoginBox() {
  // a google sign in button
  return (
    <>
      <Wrapper>
        <h1>LOGIN</h1>
        <TextButton>Google Sign In</TextButton>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.main`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;
  color: #fff;
`;

export const TextButton = styled.button`
  background: none;
  outline: none;
  padding: 0;
  margin: 0;
  border: none;
  color: ${p => p.theme.primary};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }

  &:active {
    opacity: 0.4;
  }
`;

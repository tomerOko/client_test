import * as React from 'react';
import styled from 'styled-components/macro';
import { LoginWithGoogle } from './components/LoginWithGoogle';

export function LoginBox() {
  // a google sign in button
  return (
    <>
      <Wrapper>
        <h1>LOGIN</h1>
        <LoginWithGoogle></LoginWithGoogle>
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
  color: #0c0909;
  border-color: #000000;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  margin-top: 200px;
`;

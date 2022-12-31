import * as React from 'react';
import styled from 'styled-components/macro';
import { LoginWithGoogle } from './components/LoginWithGoogle';
import { SidebarDiv } from 'app/shared/styles/sidebar/SidebarDiv';
import { LoginWithCredentials } from './components/LoginWithCredentials';
import { MainDivShadowed } from 'app/shared/styles/main/MainDiv';
import { DataDiv } from 'app/shared/styles/data_/DataDiv';

export function LoginBox() {
  // a google sign in button
  return (
    <>
      <LoginBoxFrame>
        <LoginOption style={{ border: '2px solid gray' }}>
          <LoginWithCredentials></LoginWithCredentials>
        </LoginOption>
        <CenteredAbsoluteDiv>
          <h2>or</h2>
        </CenteredAbsoluteDiv>
        <LoginOption>
          <LoginWithGoogle></LoginWithGoogle>
        </LoginOption>
      </LoginBoxFrame>
    </>
  );
}

const LoginBoxFrame = styled(SidebarDiv)`
  height: 700px;
  width: 80%;
  justify-content: space-around;
`;

const LoginOption = styled(DataDiv)`
  width: 40%;
  height: 40%;
`;

const CenteredAbsoluteDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

//style={{ border: '2px solid gray' }}

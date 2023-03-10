import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LoginBox } from './components/LoginBox';
import {
  MainCentralColumn,
  MainPageWrapper,
} from 'app/shared/styles/main/MainWrapper';
import { SidebarDiv } from 'app/shared/styles/sidebar/SidebarDiv';
import styled from 'styled-components';

export function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta
          name="login page"
          content="login page with google or with username and password"
        />
      </Helmet>
      <MainPageWrapper>
        <MainCentralColumn>
          <LoginBox />
        </MainCentralColumn>
      </MainPageWrapper>
    </>
  );
}

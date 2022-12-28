import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LoginBox } from './components/LoginBox';
import { SideBar } from 'app/shared/styles/SideBar';
import {
  SideBarCentralColumn,
  SideBarPageWrapper,
} from 'app/shared/styles/SideBar/SideBarWrapper';

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
      <SideBarPageWrapper>
        <SideBar></SideBar>
        <SideBarCentralColumn>
          <LoginBox />
        </SideBarCentralColumn>
      </SideBarPageWrapper>
    </>
  );
}
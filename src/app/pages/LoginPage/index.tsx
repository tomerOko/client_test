import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LoginBox } from './components/LoginBox';
import { Sidebar_ } from 'app/shared/styles/Sidebar/SidebarWrapper';
import {
  SidebarCentralColumn,
  SidebarPageWrapper,
} from '../../shared/styles/sidebar/SidebarWrapper';

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
      <SidebarPageWrapper>
        <Sidebar_></Sidebar_>
        <SidebarCentralColumn>
          <LoginBox />
        </SidebarCentralColumn>
      </SidebarPageWrapper>
    </>
  );
}

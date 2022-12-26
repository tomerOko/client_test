import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/shared/styles/PageWrapper';
import { LoginBox } from './components/LoginBox';
import { SideBar } from 'app/shared/styles/SideBar';

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
      <PageWrapper>
        <SideBar></SideBar>
        <LoginBox />
      </PageWrapper>
    </>
  );
}

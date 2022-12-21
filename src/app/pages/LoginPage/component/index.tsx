import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/shared/styles/NavBar';
import { PageWrapper } from 'app/shared/styles/PageWrapper';
import { LoginBox } from './components/LoginBox/component';

c;

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
      <NavBar />
      <PageWrapper>
        <LoginBox />
      </PageWrapper>
    </>
  );
}

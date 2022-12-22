import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/shared/styles/PageWrapper';
import { LoginBox } from './components/LoginBox/component';

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
        <LoginBox />
      </PageWrapper>
    </>
  );
}

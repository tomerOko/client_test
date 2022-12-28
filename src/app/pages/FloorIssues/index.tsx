import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  MainCentralColumn,
  MainPageWrapper,
} from 'app/shared/styles/main/MainWrapper';

export function FloorIssues() {
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
          <h1>Issues</h1>
        </MainCentralColumn>
      </MainPageWrapper>
    </>
  );
}

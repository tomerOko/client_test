import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SideBar } from 'app/shared/styles/SideBar';
import {
  MainPageWrapper,
  MainCentralColumn,
} from 'app/shared/styles/main/MainPageWrapper';

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
        <SideBar></SideBar>
        <MainCentralColumn>
          <h1>Issues</h1>
        </MainCentralColumn>
      </MainPageWrapper>
    </>
  );
}

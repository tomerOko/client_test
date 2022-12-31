import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  MainCentralColumn,
  MainPageWrapper,
} from 'app/shared/styles/main/MainWrapper';
import { SidebarDiv } from 'app/shared/styles/sidebar/SidebarDiv';
import styled from 'styled-components';
import { Sidebar } from 'app/shared/components/SidebarComponent';

export function HomePage() {
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
        <Sidebar></Sidebar>
        <MainCentralColumn></MainCentralColumn>
      </MainPageWrapper>
    </>
  );
}

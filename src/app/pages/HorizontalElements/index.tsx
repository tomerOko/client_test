import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SideBar } from 'app/shared/styles/SideBar';
import { SideBarPageWrapper } from 'app/shared/styles/SideBar/SideBarWrapper';

export function HorizontalElementsPage() {
  return (
    <>
      <Helmet>
        <title>Horizontal Elements Page</title>
        <meta name="Horizontal Elements Page" content="TODO:" />
      </Helmet>
      <SideBarPageWrapper>
        <SideBar></SideBar>
      </SideBarPageWrapper>
    </>
  );
}

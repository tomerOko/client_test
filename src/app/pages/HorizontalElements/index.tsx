import { Sidebar } from 'app/shared/components/SidebarComponent';
import { SidebarPageWrapper } from 'app/shared/styles/sidebar/SidebarWrapper';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export function HorizontalElementsPage() {
  return (
    <>
      <Helmet>
        <title>Horizontal Elements Page</title>
        <meta name="Horizontal Elements Page" content="TODO:" />
      </Helmet>
      <SidebarPageWrapper>
        <Sidebar></Sidebar>
      </SidebarPageWrapper>
    </>
  );
}

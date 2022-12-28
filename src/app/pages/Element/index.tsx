import {
  SidebarCentralColumn,
  SidebarPageWrapper,
} from '../../shared/styles/sidebar/SidebarWrapper/index';
import { SidebarDiv } from 'app/shared/styles/sidebar/SidebarDiv';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';

export function ElementPage() {
  return (
    <>
      <Helmet>
        <title>Elements</title>
        <meta
          name="Elements page"
          content="Elements page that redirects to the element to horizontal or vertical pages"
        />
      </Helmet>
      <SidebarPageWrapper>
        <SidebarCentralColumn>
          <TitleFlex>
            <Title>Choose your project’s Element</Title>
          </TitleFlex>
          <OptionsFlex>
            <Button>Horizontal</Button>
            <Button>Horizontal</Button>
            <Button>Horizontal</Button>
            <Button>Horizontal</Button>
          </OptionsFlex>
        </SidebarCentralColumn>
      </SidebarPageWrapper>
    </>
  );
}

// an styled component wrapper for the page with full width and height, and a background color, and center the content vertically and horizontally

const Title = styled.p`
  font-size: 2rem;
  color: ${p => p.theme.sidebar.text};
`;

const Button = styled.button`
  box-sizing: border-box;
  width: 281px;
  height: 81px;
  background: ${p => p.theme.data.background};
  border: 4px solid #06f4fe;
  border-radius: 45px;
`;

const TitleFlex = styled(SidebarDiv)`
  border: 2px solid black;
  margin-top: 200px;
`;

const OptionsFlex = styled(SidebarDiv)`
  flex-wrap: wrap;
  gap: 2rem;
  border: 2px solid black;
  margin-top: 2rem;
  justify-content: center;
`;

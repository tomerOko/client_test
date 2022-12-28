import * as React from 'react';
import styled from 'styled-components/macro';
import { P } from './styles/P';
import { Helmet } from 'react-helmet-async';
import { SideBar } from 'app/shared/styles/SideBar';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Wrapper>
        <SideBar>
          <Link to={process.env.PUBLIC_URL + '/'}>Home</Link>
        </SideBar>
        <Title>
          4
          <span role="img" aria-label="Crying Face">
            😢
          </span>
          4
        </Title>
        <P>Page not found.</P>
        <Link to={process.env.PUBLIC_URL + '/'}>Return to Home Page</Link>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;

const Title = styled.div`
  margin-top: -8vh;
  font-weight: bold;
  color: ${p => p.theme.main.text};
  font-size: 3.375rem;

  span {
    font-size: 3.125rem;
  }
`;

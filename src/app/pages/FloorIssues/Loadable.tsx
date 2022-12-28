/**
 * Asynchronously loads the component for LoginPage
 */

import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/shared/components/LoadingIndicator';
import styled from 'styled-components/macro';

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FloorIssues = lazyLoad(
  () => import('./index'),
  module => module.FloorIssues,
  {
    fallback: (
      <LoadingWrapper>
        <LoadingIndicator />
      </LoadingWrapper>
    ),
  },
);

import * as React from 'react';
import styled from 'styled-components/macro';
import { StyleConstants } from 'style/StyleConstants';

export function SideBar() {
  return (
    <>
      <SideBarContainer>
        <h1>Side Bar</h1>
        <p>Some content goes here</p>
      </SideBarContainer>
    </>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;

const SideBarContainer = styled.div`
  width: 250px;
  height: 100%;
  background-color: #333;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export default SideBar;

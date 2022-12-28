import styled from 'styled-components/macro';
import { abstractDiv } from '../../abstract/AbstractDiv';
import { sidebarColors } from '..';

export const SidebarDiv = styled(abstractDiv)`
  ${sidebarColors}
  border-radius: 15px;
`;

export const SidebarDivShadowed = styled(SidebarDiv)`
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
`;

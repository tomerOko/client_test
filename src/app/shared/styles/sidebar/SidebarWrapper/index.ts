import styled from 'styled-components/macro';
import {
  AbstractCentralColumn,
  AbstractPageWrapper,
} from '../../abstract/AbstractPageWrapper';
import { sidebarColors } from '../';

export const SidebarPageWrapper = styled(AbstractPageWrapper)`
  ${sidebarColors}
`;

export const SidebarCentralColumn = styled(AbstractCentralColumn)`
  ${sidebarColors}
`;

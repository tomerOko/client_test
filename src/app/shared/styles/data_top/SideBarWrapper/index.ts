import styled from 'styled-components/macro';
import {
  AbstractCentralColumn,
  AbstractPageWrapper,
} from '../../abstract/AbstractPageWrapper';
import { dataColors } from '..';

export const SideBarPageWrapper = styled(AbstractPageWrapper)`
  ${dataColors}
`;

export const SideBarCentralColumn = styled(AbstractCentralColumn)`
  ${dataColors}
`;

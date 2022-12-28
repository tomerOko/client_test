import styled from 'styled-components/macro';
import {
  AbstractCentralColumn,
  AbstractPageWrapper,
} from '../../abstract/AbstractPageWrapper';
import { mainColors } from '..';

export const MainPageWrapper = styled(AbstractPageWrapper)`
  ${mainColors}
`;

export const MainCentralColumn = styled(AbstractCentralColumn)`
  ${mainColors}
`;

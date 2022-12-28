import styled from 'styled-components/macro';
import {
  AbstractCentralColumn,
  AbstractPageWrapper,
} from '../../abstract/AbstractPageWrapper';
import { dataColors } from '..';

export const DataPageWrapper = styled(AbstractPageWrapper)`
  ${dataColors}
`;

export const DataCentralColumn = styled(AbstractCentralColumn)`
  ${dataColors}
`;

import styled from 'styled-components/macro';
import { abstractDiv } from '../../abstract/AbstractDiv';
import { dataColors } from '..';

export const DataDiv = styled(abstractDiv)`
  ${dataColors}
  border-radius: 15px;
`;

export const DataDivShadowed = styled(DataDiv)`
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
`;

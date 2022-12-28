import styled from 'styled-components/macro';
import { abstractDiv } from '../../abstract/AbstractDiv';
import { mainColors } from '..';

export const MainDiv = styled(abstractDiv)`
  ${mainColors}
  border-radius: 15px;
`;

export const MainDivShadowed = styled(MainDiv)`
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
`;

import styled from 'styled-components/macro';
import { abstractDiv } from '../../abstract/AbstractDiv';
import { dataColors } from '..';

//TODO: decide if the color and back ground color shuld be a div or a wrapper css property (in 'sidebar' in is the wrapper and here it is the div..)
export const DataDiv = styled(abstractDiv)`
  ${dataColors}
  border-radius: 15px;
`;

export const DataDivShadowed = styled(DataDiv)`
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
`;

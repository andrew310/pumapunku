/**
*
* P
*
*/

import styled from 'styled-components';
import { modularScale } from 'polished';

const P = styled.p`
  font-size: ${(props) => props.theme.baseFontSize};
  font-family: ${(props) => props.theme.baseFontFamily};
  font-weight: ${(props) => props.theme.baseTextWeight};
  line-height: ${(props) => props.theme.baseLineHeight};
  color: ${(props) => props.theme.baseTextColor};
`;

P.defaultProps = {
  theme: {
    baseFontSize: '1rem',
    baseTextColor: 'inherit',
    baseFontFamily: 'inherit',
    baseTextWeight: 200,
    baseLineHeight: modularScale(1),
  },
};

export default P;

/**
*
* Font
*
*/

import { css } from 'styled-components';
import { modularScale } from 'polished';

const Font = css`
  font-size: ${(props) => modularScale(props.size, props.scaleBase, props.scaleRatio)};
  font-family: ${(props) => props.family};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
  margin-bottom: ${(props) => props.marginBottom};
`;

export default Font;

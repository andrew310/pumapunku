/**
*
* Heading
*
*/

import styled from 'styled-components';
import { modularScale } from 'polished';
import Font from '../Font';

const Heading = styled.h1.attrs({
  size: (props) => props.size,
  fontFamily: (props) => props.fontFamily || props.theme.headingsFontFamily || 'inherit',
  scaleBase: (props) => props.scaleBase || props.theme.scaleBase || 1,
  scaleRatio: (props) => props.scaleRatio || props.theme.scaleRatio || 'perfectFourth',
  color: (props) => props.color || props.theme.headingsColor || '#4B4B4B',
  fontWeight: (props) => props.fontWeight || props.theme.headingsFontWeight || 600,
  lineHeight: (props) => props.lineHeight || props.theme.headingsLineHeight || modularScale(1),
  marginBottom: (props) => props.theme.headingsMarginBottom || '1rem',
})`
  ${Font};
`;

export default Heading;

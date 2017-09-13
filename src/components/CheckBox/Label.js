/**
*
* Label (CheckBox)
*
*/

import styled from 'styled-components';
import Font from '../Font';

const Label = styled.label.attrs({
  fontFamily: (props) => props.fontFamily || props.theme.baseFontFamily,
  color: (props) => props.color || props.theme.baseTextColor || '#86898B',
})`
  ${Font};
  padding-left: 0.2rem;
`;

export default Label;

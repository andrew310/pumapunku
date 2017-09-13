/**
*
* Input
*
*/

import { css } from 'styled-components';
import { modularScale } from 'polished';

const Input = css`
  display: block;
  width: 100%;
  margin: 0;
  outline: none;

  border-width:${(props) => props.borderWidth || '1px'};
  border-style: solid;
  border-color: ${(props) => props.borderColor || '#CCCCCC'};
  border-radius: 4px;

  font-family: ${(props) => props.fontFamily || 'inherit'};
  font-size: 1em;
  line-height: ${(props) => props.lineHeight || modularScale(1)};
  text-indent: 1em;

  padding: 0.5em 0;
  color: ${(props) => props.color || '#666671'};
  background-color: ${(props) => props.backgroundColor || '#FFFFFF'};

  &:focus {
    ${(props) => props.focusedBorderColor ? `border-color: ${props.focusedBorderColor}` : null};
    ${(props) => props.outlineColor ? `box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1), 0 0 0 3px ${props.outlineColor}` : null};
  }
`;

export default Input;

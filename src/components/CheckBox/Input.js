/**
*
* Input (CheckBox)
*
*/

import styled from 'styled-components';
import { lighten } from 'polished';

const Input = styled.input`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  outline: none;
  position: relative;

  &:before {
    content: '';
    position: relative;
    float: left;
    width: 14px;
    height: 14px;
    border: 1px solid #d0d0d0;
    border-radius: 2px;
    transition: all 0.2s ease;
  }

  &:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 5px;
    width: 4px;
    height: 8px;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(25deg) scale(.1);
    transition: all 0.2s ease;
  }

  &:checked:before {
    background: ${lighten(0.1, '#67ABEA')};
    border-color: #67ABEA;
  }

  &:checked:after {
    transform: rotate(40deg) scale(1);
  }

  &:checked:hover:before {
    background: #45a6f5;
  }

  &:focus:before {
    border-color: #67ABEA;
    ${(props) => props.focusedBorderColor ? `border-color: ${props.focusedBorderColor}` : null};
    ${(props) => props.outlineColor ? `box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1), 0 0 0 3px ${props.outlineColor}` : null};
  }
`;

export default Input;

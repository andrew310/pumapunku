/**
*
* Input
*
*/

import styled from 'styled-components';
import Input from '../Input';

const TextBoxInput = styled.input.attrs({
  borderWidth: (props) => props.borderWidth || props.theme.inputBorderWidth,
  borderColor: (props) => props.borderColor || props.theme.inputBorderColor,
  focusedBorderColor: (props) => props.focusedBorderColor || props.theme.focusedInputBorderColor,
  fontFamily: (props) => props.fontFamily || props.theme.inputFontFamily || props.theme.baseFontFamily,
  lineHeight: (props) => props.lineHeight || props.theme.inputLineHight,
  backgroundColor: (props) => props.backgroundColor || props.theme.inputBackgroundColor,
})`
  ${Input};

  & + label {
    font-family: ${(props) => props.fontFamily || props.theme.inputFontFamily || props.theme.baseFontFamily};
    color: ${(props) => props.labelColor || props.theme.labelColor || '#AAAAAA'};
  }

  &:focus + label {
    padding-left: 3rem;
    color: ${(props) => props.focusedLabelColor || props.theme.focusedLabelColor || '#AAAAAA'};
  }

  &::placeholder {
    color: #AAAAAA;
  }

  &:not(:placeholder-shown) + label {
    padding: 0;
    -webkit-transform: translateY(-1.9rem) scale(0.8);
            transform: translateY(-1.9rem) scale(0.8);
    transform-origin: left;
  }
`;

export default TextBoxInput;

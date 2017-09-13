/**
*
* TextBox
*
*/

import React, { PropTypes } from 'react';
import Wrapper from './Wrapper';
import TextBoxInput from './TextBoxInput';
import Label from './Label';

function TextBox(props) {
  const { label, ...rest } = props;

  if (label) {
    return (
      <Wrapper>
        <TextBoxInput {...rest} placeholder="&nbsp;" />
        <Label htmlFor={label}>{label}</Label>
      </Wrapper>
    );
  }
  return (
    <TextBoxInput {...props} />
  );
}

TextBox.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.object,
  icon: PropTypes.string,
  fontFamily: PropTypes.string,
  lineHeight: PropTypes.string,
  borderWidth: PropTypes.string,
  borderColor: PropTypes.string,
  focusedBorderColor: PropTypes.string,
  focusedLabelColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  outlineColor: PropTypes.string,
};

TextBox.defaultProps = {
  type: 'text',
  label: null,
  theme: null,
  icon: null,
  fontFamily: null,
  lineHeight: null,
  borderWidth: null,
  borderColor: null,
  focusedBorderColor: null,
  focusedLabelColor: null,
  backgroundColor: null,
  outlineColor: null,
};

export default TextBox;

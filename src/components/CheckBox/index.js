/**
*
* CheckBox
*
*/

import React, { PropTypes } from 'react';
import Input from './Input';
import Label from './Label';
import Wrapper from './Wrapper';

function CheckBox(props) {
  const { label, fontFamily, color, ...rest } = props;
  const labelProps = { label, fontFamily, color, theme: props.theme };

  if (props.label) {
    return (
      <Wrapper>
        <Input type={'checkbox'} {...rest} />
        <Label htmlFor={props.label} size={0} {...labelProps}>
          {props.label}
        </Label>
      </Wrapper>
    );
  }

  return (<Input type={'checkbox'} {...rest} />);
}

CheckBox.propTypes = {
  label: PropTypes.string,
  fontFamily: PropTypes.string,
  color: PropTypes.string,
  theme: PropTypes.object,
};

CheckBox.defaultProps = {
  label: null,
  fontFamily: null,
  color: null,
  theme: null,
};

export default CheckBox;

import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import TextBox from '../index';

describe('<TextBox />', () => {
  it('Expect to render label and input', () => {
    const wrapper = mount(<TextBox label={'test'} />);

    expect(wrapper.containsAnyMatchingElements([
      <label>test</label>,
      <input />
    ])).toEqual(true);
  });

  it('Expect to render input with placeholder, no label', () => {
    const wrapper = mount(<TextBox placeholder={'test'} />);

    expect(wrapper.containsAnyMatchingElements([
      <input placeholder="test" />
    ])).toEqual(true);

    expect(wrapper.find('label').exists()).toEqual(false);

  });
});

import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import CheckBox from '../index';

describe('<CheckBox />', () => {
  it('Expect input checkbox and label', () => {
    const wrapper = mount(<CheckBox label={'test'} />);

    expect(wrapper.containsAnyMatchingElements([
      <label htmlFor="test">test</label>,
      <input />,
    ])).toEqual(true);
  });

  it('Expect input only', () => {
    const wrapper = mount(<CheckBox />);

    expect(wrapper.containsAnyMatchingElements([
      <label htmlFor="test">test</label>,
    ])).toEqual(false);
  });
});

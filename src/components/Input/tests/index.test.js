import React from 'react';
import { shallow } from 'enzyme';
import styled from 'styled-components';
import 'jest-styled-components';

import Input from '../index';

const MyInput = styled.input.attrs({
  borderWidth: '2px',
})`
  ${Input};
`;

describe('<MyInput />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <MyInput id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should have some input', () => {
    const renderedComponent = shallow(
      <MyInput value={'some input'} />
    );
    expect(renderedComponent.prop('value')).toEqual('some input');
  });

  it('should have its style rules', () => {
    const renderedComponent = shallow(
      <MyInput color={'blue'} />
    );

    expect(renderedComponent).toHaveStyleRule('font-size', '1em');
    expect(renderedComponent).toHaveStyleRule('color', 'blue');
  });
});

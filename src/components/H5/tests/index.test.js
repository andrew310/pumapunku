import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import H5 from '../index';

describe('<H5 />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <H5 id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <H5>{children}</H5>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });

  it('should should have correct font-size based on modular scale', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <H5>{children}</H5>
    );

    // Modular scale: 1.333 * 1 = 1.333
    expect(renderedComponent).toHaveStyleRule('font-size', '1.333em');
  });
});

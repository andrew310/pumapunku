import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import H1 from '../index';

describe('<H1 />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <H1 id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <H1>{children}</H1>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });

  it('should should have correct font-size based on modular scale', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <H1>{children}</H1>
    );

    // Modular scale: 1.333 * 1.333 * 1.333 * 1.333 * 1.333 = 4.20872691292189
    expect(renderedComponent).toHaveStyleRule('font-size', '4.208726912921893em');
  });
});

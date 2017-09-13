import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import H6 from '../index';

describe('<H6 />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <H6 id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <H6>{children}</H6>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });

  it('have style rule of font-size 1em', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <H6>{children}</H6>
    );

    // Modular scale: 1
    expect(renderedComponent).toHaveStyleRule('font-size', '1em');
  });
});

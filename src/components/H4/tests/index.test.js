import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import H4 from '../index';

describe('<H4 />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <H4 id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <H4>{children}</H4>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <H4>{children}</H4>
    );

    // Modular scale: 1.333 * 1.333 = 1.776889
    expect(renderedComponent).toHaveStyleRule('font-size', '1.776889em');
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import H2 from '../index';

describe('<H2 />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <H2 id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <H2>{children}</H2>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <H2>{children}</H2>
    );

    // Modular scale: 1.333 * 1.333 * 1.333 * 1.333 = 3.157334518321
    expect(renderedComponent).toHaveStyleRule('font-size', '3.157334518321em');
  });
});

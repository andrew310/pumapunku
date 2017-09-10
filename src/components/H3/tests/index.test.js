import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import H3 from '../index';

describe('<H3 />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <H3 id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <H3>{children}</H3>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <H3>{children}</H3>
    );

    // Modular scale: 1.333 * 1.333 * 1.333 = 2.368593037
    expect(renderedComponent).toHaveStyleRule('font-size', '2.3685930369999997em');
  });
});

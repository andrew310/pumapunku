import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { withKnobs, select } from '@storybook/addon-knobs';

// Components
import CheckBox from '../src/components/CheckBox';
import H6 from '../src/components/H6';
import P from '../src/components/P';

const stories = storiesOf('CheckBox', module);

const fontOptions = {
  Lato: 'Lato',
  'Libre Franklin': 'Libre Franklin',
  Roboto: 'Roboto',
  Raleway: 'Raleway',
  'Open Sans': 'Open Sans',
  Poppins: 'Poppins',
  'Fira Sans': 'Fira Sans',
  'Source Sans Pro': 'Source Sans Pro',
};

stories.addDecorator((story) => {
  const content = story();

  const baseFont = select('baseFontFamily', fontOptions, 'Poppins');
  const baseFontGoogle = baseFont.split(' ').join('+');

  const getFonts = injectGlobal`
    @import url(https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700);
    @import url(https://fonts.googleapis.com/css?family=${baseFontGoogle}:200,300,400,500,600,700);
  `;

  return (
    <ThemeProvider
      theme={{
        headingsFontFamily: 'Poppins',
        baseTextColor: '#5C636B',
        baseFontFamily: baseFont,
        baseTextWeight: 300,
      }}
    >
      {(getFonts, content)}
    </ThemeProvider >
  );
});

stories.addDecorator(withKnobs);

stories.add('base', () => (
  <div>
    <H6>Checkbox</H6>
    <P>{'base'}</P>
    <div style={{ width: '250px', paddingTop: '30px' }}>
      <CheckBox label={'item 1'} />
      <CheckBox label={'item 2'} />
    </div>
  </div>
));

stories.add('with focus outline', () => (
  <div>
    <H6>Checkbox</H6>
    <P>{'with focus outline'}</P>
    <div style={{ width: '250px', paddingTop: '30px' }}>
      <CheckBox label={'item 1'} outlineColor={'#E6F3FF'} />
      <CheckBox label={'item 2'} outlineColor={'#E6F3FF'} />
    </div>
  </div>
));

import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { withKnobs, select } from '@storybook/addon-knobs';

// Components
import TextBox from '../src/components/TextBox';
import H6 from '../src/components/H6';
import P from '../src/components/P';

const stories = storiesOf('Textbox', module);

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
    <H6>Textbox</H6>
    <P>base</P>
    <div style={{ width: '250px', padding: '30px' }}>
      <TextBox placeholder={'textbox'} />
    </div>
  </div>
));

stories.add('with outlineColor and focusedBorderColor', () => (
  <div>
    <H6>Textbox</H6>
    <P>{'with outlineColor and focusedBorderColor'}</P>
    <div style={{ width: '250px', padding: '30px' }}>
      <TextBox placeholder={'pumapunku'} outlineColor={'#E6F3FF'} focusedBorderColor={'#67ABEA'} />
    </div>
  </div>
));

stories.add('with floating label', () => (
  <div>
    <H6>Textbox</H6>
    <P>{'with floating label'}</P>
    <div style={{ width: '250px', padding: '30px' }}>
      <TextBox label={'username'} />
      <TextBox label={'password'} type={'password'} />
    </div>
  </div>
));

stories.add('with floating label and focusedLabelColor', () => (
  <div>
    <H6>Textbox</H6>
    <P>{'with floating label and focusedLabelColor'}</P>
    <div style={{ width: '250px', padding: '30px' }}>
      <TextBox label={'username'} focusedLabelColor={'#90B8DD'} />
      <TextBox label={'password'} type={'password'} focusedLabelColor={'#90B8DD'} />
    </div>
  </div>
));

stories.add('with floating label, focusedLabelColor, outlineColor, and focusedBorderColor', () => (
  <div>
    <H6>Textbox</H6>
    <P>{'with floating label and focusedLabelColor'}</P>
    <div style={{ width: '250px', padding: '30px' }}>
      <TextBox label={'username'} focusedLabelColor={'#90B8DD'} outlineColor={'#E6F3FF'} focusedBorderColor={'#67ABEA'} />
      <TextBox label={'password'} type={'password'} focusedLabelColor={'#90B8DD'} outlineColor={'#E6F3FF'} focusedBorderColor={'#67ABEA'} />
    </div>
  </div>
));

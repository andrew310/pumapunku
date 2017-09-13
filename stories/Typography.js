/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, number, color } from '@storybook/addon-knobs';
import styled from 'styled-components';
import { ThemeProvider, injectGlobal } from 'styled-components'
import { fontFace } from 'polished';

// Components
import H1 from '../src/components/H1';
import H2 from '../src/components/H2';
import H3 from '../src/components/H3';
import H4 from '../src/components/H4';
import H5 from '../src/components/H5';
import H6 from '../src/components/H6';
import P from '../src/components/P';

// Define story
const stories = storiesOf('Typography', module);

// Options for knob selects
const ratioOptions = {
  minorSecond: 'minorSecond',
  majorSecond: 'majorSecond',
  minorThird: 'minorThird',
  majorThird: 'majorThird',
  perfectFourth: 'perfectFourth',
  augFourth: 'augFourth',
  perfectFifth: 'perfectFifth',
  minorSixth: 'minorSixth',
  goldenSection: 'goldenSection',
  majorSixth: 'majorSixth',
  minorSeventh: 'minorSeventh',
  majorSeventh: 'majorSeventh',
  octave: 'octave',
  majorTenth: 'majorTenth',
  majorEleventh: 'majorEleventh',
  majorTwelfth: 'majorTwelfth',
  doubleOctave: 'doubleOctave',
};



const fontOptions = {
  Lato: 'Lato',
  'Libre Franklin': 'Libre Franklin',
  Roboto: 'Roboto',
  Raleway: 'Raleway',
  'Open Sans': 'Open Sans',
  Poppins: 'Poppins',
  'Fira Sans': 'Fira Sans'
};

const rootSizeOptions = {
  '8px': '8px',
  '10px': '10px',
  '12px': '12px',
  '14px': '14px',
  '16px': '16px'
};

const baseTextWeightOptions = {
  '100': 300,
  '300': 300,
  '300': 300,
  '400': 400,
  '500': 500,
  '600': 600,
};

stories.addDecorator((story) => {
  const content = story();
  const headingsFont = select('headingsFontFamily', fontOptions, 'Poppins');
  const headingsFontGoogle = headingsFont.split(' ').join('+');

  const baseFont = select('baseFontFamily', fontOptions, 'Poppins');
  const baseFontGoogle = baseFont.split(' ').join('+');

  const getFonts = injectGlobal`
    @import url(https://fonts.googleapis.com/css?family=${headingsFontGoogle}:300,400,500,600,700);
    @import url(https://fonts.googleapis.com/css?family=${baseFontGoogle}:300,400,500,600,700);
  `;

  return (
  <ThemeProvider theme={{
      scaleRatio: select('scaleRatio', ratioOptions, 'perfectFourth'),
      headingsColor: color('headingsColor', '#4b4b4b'),
      headingsFontFamily: headingsFont,
      headingsFontWeight: 600,
      baseFontFamily: baseFont,
      baseTextColor: '#86898B',
      baseTextWeight: 300,
    }}>
    {getFonts, content}
  </ThemeProvider >
);
});

stories.addDecorator(withKnobs);

stories.add('headings and paragraph', () => (
  <div style={{width: '80%', fontSize: select('rootFontSize', rootSizeOptions, '16px')}}>
    <H6>Typography</H6>
    <H1>Pumapunku H1</H1>
    <H2>Pumapunku H2</H2>
    <H3>Pumapunku H3</H3>
    <H4>Pumapunku H4</H4>
    <H5>Pumapunku H5</H5>
    <H6>Pumapunku H6</H6>
    <P>
    {'Flannel umami 90\'s hammock copper mug vexillologist lomo tousled blog direct trade selfies.'}
    {' Etsy literally typewriter swag offal occupy. Edison bulb ethical poke shaman'}
    {' freegan brunch portland butcher single-origin coffee meggings man braid.'}
    {' Kogi celiac yr tumblr, poutine marfa dreamcatcher polaroid salvia quinoa brunch edison bulb venmo jianbing.'}
    {' Four dollar toast twee tilde, fashion axe you probably haven\'t heard of them'}
    {' whatever put a bird on it letterpress vinyl portland fingerstache photo booth wayfarers.'}
    {' Pitchfork offal quinoa DIY tousled. Knausgaard mustache crucifix, live-edge blog venmo DIY hammock salvia raw denim.'}
    {' Food truck live-edge vexillologist tbh taxidermy cornhole, seitan taiyaki DIY tattooed.'}
    {' Affogato tilde tofu cred gochujang distillery tumblr photo booth neutra bicycle rights.'}
    {' Sriracha freegan copper mug, bushwick mixtape bespoke iceland.'}
    {' You probably haven\'t heard of them crucifix humblebrag sustainable DIY subway tile literally.'}
    {' Aesthetic poutine adaptogen, live-edge 8-bit health goth banh mi.'}
    {' Affogato photo booth poutine offal tote bag etsy flannel art party stumptown skateboard.'}</P>
  </div>
));

import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'pumapunku',
  showSearchBox: false,
  showLeftPanel: true,
  downPanelInRight: true,
  url: '#'
});

function loadStories() {
  require('../stories/Typography');
}

configure(loadStories, module);

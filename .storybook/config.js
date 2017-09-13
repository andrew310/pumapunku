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
  require('../stories/TextBox');
  require('../stories/CheckBox');
}

configure(loadStories, module);

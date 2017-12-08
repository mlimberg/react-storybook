import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
  // require('../src/components/App/__stories__')
  require('../src/components/Card/__stories__')
  require('../src/components/Header/__stories__')
  // require('../src/components/TextContainer/__stories__')
}

configure(loadStories, module);

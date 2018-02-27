import { configure } from '@storybook/angular';
import { setOptions } from '@storybook/addon-options';

import addCssWarning from './css-warnings';

// @FIXME what is this good for ?
// https://github.com/storybooks/storybook/blob/master/examples/angular-cli/.storybook/config.js#L5
// addCssWarning();

setOptions({
  hierarchyRootSeparator: /\|/,
});

function loadStories() {
  // put welcome screen at the top of the list so it's the first one displayed
  require('../src/stories/welcome');

  // automatically import all story ts files that end with *.stories.ts
  const req = require.context('../src', true, /\.stories\.ts$/);
  req.keys().forEach((filename) => req(filename));

  // automatically import all story ts files that end with *.stories.ts within app ( side by side implementation )
  // const reqLocal = require.context('../src/app', true, /\.stories\.ts$/);
  // reqLocal.keys().forEach((filename) => reqLocal(filename));
}

configure(loadStories, module);

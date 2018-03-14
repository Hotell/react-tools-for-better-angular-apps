import { configure } from '@storybook/angular';
import { setOptions } from '@storybook/addon-options';

// automatically import all files ending in *.stories.ts
const req = require.context('../src/stories', true, /.stories.ts$/);
const reqLocal = require.context('../src/app', true, /.stories.ts$/);

function loadStories() {
  req.keys().forEach(loadStory(req));
  reqLocal.keys().forEach(loadStory(reqLocal));
}

/**
 *
 * @param {(filename:string)=>any} callback
 */
function loadStory(callback) {
  return (filename) => callback(filename);
}

configure(loadStories, module);

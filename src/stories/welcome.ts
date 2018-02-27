import { storiesOf } from '@storybook/angular';
import { Welcome } from '@storybook/angular/demo';

storiesOf('Welcome', module).add('to Storybook', () => ({
  template: `<storybook-welcome-component></storybook-welcome-component>`,
  props: {},
  moduleMetadata: {
    declarations: [Welcome],
  },
}));

import { storiesOf } from '@storybook/angular';

import { AppComponent } from './app.component';
import { CoreModule } from './core';

storiesOf('App Component', module).add('root app component', () => ({
  moduleMetadata: {
    imports: [CoreModule.forRoot()],
  },
  component: AppComponent,
  props: {},
}));

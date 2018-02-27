import { storiesOf, moduleMetadata } from '@storybook/angular';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

storiesOf('App Component', module).add('root app component', () => ({
  // @FIXME: aliasing doesn't work here !
  moduleMetadata: {
    // imports: [AppModule],
  },
  // template: `<app-root></app-root>`,
  template: `@FIXME Martin !`,
  props: {},
}));

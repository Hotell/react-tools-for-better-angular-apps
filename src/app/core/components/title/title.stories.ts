import { text, withKnobs } from '@storybook/addon-knobs/angular';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UserService } from '../../services';
import { TitleComponent } from './title.component';

storiesOf(`${TitleComponent.name}`, module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      providers: [UserService],
      declarations: [TitleComponent],
    })
  )
  .add('default', () => {
    return {
      template: `<app-title></app-title>`,
    };
  })
  .add('with title input', () => {
    return {
      template: `<app-title [title]="title"></app-title>`,
      props: {
        title: text('title', 'App'),
      },
    };
  });

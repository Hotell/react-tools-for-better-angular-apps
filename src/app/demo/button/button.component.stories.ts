import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  select,
  color,
  date,
  button,
} from '@storybook/addon-knobs/angular';

import { ButtonComponent } from './button.component';

storiesOf('My Button', module)
  .addDecorator(withKnobs)
  .add('with some text and knobs enabled', () => {
    const textProp = text('text', 'Hello World');
    return {
      component: ButtonComponent,
      props: {
        text: textProp,
      },
    };
  })
  .add('with some text', () => ({
    component: ButtonComponent,
    props: {
      text: 'Hello World',
    },
  }))
  .add('with some text and action', () => ({
    component: ButtonComponent,
    props: {
      text: 'Hello World',
      click: action('clicked'),
    },
  }))
  .add('with content projection', () => ({
    moduleMetadata: {
      declarations: [ButtonComponent],
    },
    template: `<app-button>Hello World</app-button>`,
    props: {
      click: action('clicked'),
    },
  }))
  .add(
    'Note with HTML',
    withNotes({
      text: `
        <h2>My notes on emojis</h2>
        <em>It's not all that important to be honest, but..</em>
        Emojis are great, I love emojis, in fact I like using them in my Component notes too! 😇
      `,
    })(() => ({
      component: ButtonComponent,
      props: {
        text: 'Notes with HTML',
        onClick: () => {},
      },
    }))
  );

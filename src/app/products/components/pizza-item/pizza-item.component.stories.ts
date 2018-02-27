import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { storiesOf, moduleMetadata } from '@storybook/angular';
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

import { StylesComponent } from '../../../../stories/module-metadata';
import { PizzaItemComponent } from './pizza-item.component';
import { PizzaDisplayComponent } from '../pizza-display/pizza-display.component';
import { pizzaMock, toppingsMock } from './pizza-item.mocks';

storiesOf('Pizza Item', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [BrowserAnimationsModule, RouterTestingModule],
      declarations: [PizzaItemComponent, PizzaDisplayComponent, StylesComponent],
      providers: [],
    })
  )
  .add('render empty pizza', () => {
    return {
      template: `
        <storybook-styles>
          <pizza-item [pizza]="pizza"></pizza-item>
        </storybook-styles>
      `,
      props: {
        pizza: {},
      },
    };
  })
  .add('render pizza without toppings!', () => {
    return {
      template: `
        <storybook-styles>
          <pizza-item [pizza]="pizza"></pizza-item>
        </storybook-styles>
      `,
      props: {
        pizza: pizzaMock,
      },
    };
  })
  .add('render pizza with toppings!', () => {
    return {
      template: `
        <storybook-styles>
          <pizza-item [pizza]="pizza"></pizza-item>
        </storybook-styles>
      `,
      props: {
        pizza: { ...pizzaMock, toppings: toppingsMock },
      },
    };
  });

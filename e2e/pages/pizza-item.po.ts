import { Selector } from 'testcafe';

import { BasePage } from './base.po';
import { PizzaFormWidget } from '../widgets/pizza-form.widget';
import { PizzaDetailWidget } from '../widgets/pizza-display.widget';

export class PizzaItemPage extends BasePage {
  form = new PizzaFormWidget();
  view = new PizzaDetailWidget();
}

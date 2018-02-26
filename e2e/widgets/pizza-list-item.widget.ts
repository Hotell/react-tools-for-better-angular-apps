import { Selector } from 'testcafe';

import { PizzaDetailWidget } from './pizza-display.widget';

export class PizzaListItem {
  static selector = 'pizza-item';
  root = Selector(PizzaListItem.selector);
  detail = new PizzaDetailWidget();
  pizzaName = this.root.find('h4');
  viewPizzaButton = this.root.find('button').withText('View Pizza');
}

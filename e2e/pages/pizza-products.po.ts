import { Selector } from 'testcafe';

import { browser } from '../utils';

import { PizzaListItem } from '../widgets/pizza-list-item.widget';

export class PizzaProductsPage {
  static selector = 'app-products';
  private root = Selector(PizzaProductsPage.selector);
  productsListRoot = this.root.find('.products__list');
  private products = new PizzaListItem();
  createNewPizzaButton = Selector('.products__new > a');

  async getProducts(name?: string) {
    if (name) {
      const pizzaName = this.products.pizzaName.withText(name);

      if (pizzaName) {
        return pizzaName.parent(PizzaListItem.selector);
      }
      return (null as any) as Selector;
    }
    return this.products.root;
  }

  navigateTo() {
    return browser.goTo('/');
  }
}

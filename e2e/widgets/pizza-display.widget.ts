import { Selector } from 'testcafe';
export class PizzaDetailWidget {
  static selector = 'pizza-display';
  root = Selector(PizzaDetailWidget.selector);
  pizzaImg = this.root.find('img[src="/assets/img/pizza.svg"]');
  toppingsImg = this.root.find('img.pizza-display__topping');
}

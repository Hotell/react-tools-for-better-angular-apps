import { Selector, t } from 'testcafe';

export class PizzaTopingsWidget {
  private root = Selector('pizza-toppings');
  getTopings() {
    return this.root.find('.pizza-toppings-item');
  }
  getToping(name: string) {
    return this.getTopings().withAttribute(`data-test`, name);
  }

  selectToping(name: string) {
    const topping = this.getToping(name);
    return t.click(topping);
  }
}

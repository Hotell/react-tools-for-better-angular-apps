import { Selector } from 'testcafe';
import { PizzaTopingsWidget } from './pizza-toppings.widget';
export class PizzaFormWidget {
  static selector = 'pizza-form';
  private root = Selector(PizzaFormWidget.selector);
  private topingsRoot = this.root.find('.pizza-form__list');
  private actionsRoot = this.root.find('.pizza-form__actions');

  pizzaNameInput = this.root.find(`input[formControlName="name"]`);
  pizzaNameInputError = this.root.find('.pizza-form__error');

  actionButtons = {
    create: this.actionsRoot.find('button').withText('Create Pizza'),
    save: this.actionsRoot.find('button').withText('Save changes'),
    delete: this.actionsRoot.find('button').withText('Delete Pizza'),
  };

  toppings = new PizzaTopingsWidget();
}

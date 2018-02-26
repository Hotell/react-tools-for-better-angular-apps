import { Selector, t } from 'testcafe';

import { browser } from '../utils';

export class BasePage {
  private mainMenu = Selector('.app__nav').find('a');
  private newPizzaButton = Selector('a').withAttribute('href', '/products/new');

  navigateTo(path: string = '/') {
    return browser.goTo(path);
  }

  navigateToProducts() {
    return t.click(this.mainMenu.withAttribute('href', '/products'));
  }
  navigateToNewProduct() {
    return t.click(this.newPizzaButton);
  }
}

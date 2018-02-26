import { PizzaItemPage } from './pages/pizza-item.po';
import { PizzaProductsPage } from './pages/pizza-products.po';

const pizzaItem = new PizzaItemPage();
const products = new PizzaProductsPage();

const newPizzaName = 'Vikings chili pizza';

fixture
  .only('Create Pizza')
  .beforeEach(async (t) => {
    await pizzaItem.navigateTo();
  })
  .afterEach(async (t) => {
    const pizza = await products.getProducts(newPizzaName);
    await t.click(pizza);

    await t.setNativeDialogHandler((type, text, url) => {
      switch (type) {
        case 'confirm':
          switch (text) {
            case 'Are you sure?':
              return true;
            default:
              throw new Error('Unexpected confirm dialog!');
          }
        case 'prompt':
          return 'Hi there';
        case 'alert':
          throw new Error('An alert was invoked!');
      }
    });

    await t.click(pizzaItem.form.actionButtons.delete);
  });

test('should add Marvel chili Pizza to the menu!', async (t) => {
  await pizzaItem.navigateToNewProduct();

  await t.typeText(pizzaItem.form.pizzaNameInput, newPizzaName);

  await pizzaItem.form.toppings.selectToping('chili');
  await pizzaItem.form.toppings.selectToping('olive');
  await pizzaItem.form.toppings.selectToping('tomato');
  await pizzaItem.form.toppings.selectToping('bacon');

  await t.click(pizzaItem.form.actionButtons.create);

  await pizzaItem.navigateToProducts();
  const pizzas = await products.getProducts();

  await t.expect(pizzas.count).eql(3);
});

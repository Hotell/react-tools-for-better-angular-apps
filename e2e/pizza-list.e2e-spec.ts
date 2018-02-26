import { ClientFunction } from 'testcafe';

import { PizzaProductsPage } from './pages/pizza-products.po';

const getWindowLocation = ClientFunction(() => window.location);

const productsPage = new PizzaProductsPage();

fixture('Products showcase').beforeEach(async (t) => {
  await productsPage.navigateTo();
});

test('should contain 2 pizzas', async (t) => {
  const products = await productsPage.getProducts();
  await t.expect(products.count).eql(2);
});

test(`should have "Blazin' Inferno" pizza on stock`, async (t) => {
  const pizza = await productsPage.getProducts(`Blazin' Inferno`);
  await t.expect(pizza.exists).ok();
});

test(`should not have "Black panther" pizza`, async (t) => {
  const pizza = await productsPage.getProducts(`Black panther`);
  await t.expect(pizza.exists).notOk();
});

test(`should navigate to Blazin Inferno detail`, async (t) => {
  const pizza = await productsPage.getProducts(`Blazin' Inferno`);
  await t.click(pizza);

  const location: Location = await getWindowLocation();

  await t.expect(location.pathname).contains('/products/1');
});

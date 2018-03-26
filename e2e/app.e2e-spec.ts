import { AppPage } from './app.po';

const page = new AppPage();

fixture('App').beforeEach(async (t) => {});

test('should display welcome message', async (t) => {
  await page.navigateTo();

  const paragraphText = await page.getParagraphText();

  await t.expect(paragraphText).contains('Welcome to app!');
});

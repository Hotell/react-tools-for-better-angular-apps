// import { waitForAngular } from 'testcafe-angular-selectors';

import { AppPage } from './app.po';

const page = new AppPage();

fixture('ro-sa App').beforeEach(async (t) => {
  // await waitForAngular();
});

test('should display welcome message', async (t) => {
  await page.navigateTo();

  const paragraphText = await page.getParagraphText();

  await t.expect(paragraphText).contains('Welcome to app!');
});

import { chromium, type FullConfig, selectors } from '@playwright/test';
import { LoginPage } from '@pageobjects/login.page';

async function globalSetup(config: FullConfig) {
  const baseURL = config.projects[0].use.baseURL;
  selectors.setTestIdAttribute(config.projects[0].use.testIdAttribute || 'data-qa');
  const browser = await chromium.launch();
  const context = await browser.newContext({
    baseURL
  });
  const page = await context.newPage();
  const loginPage = new LoginPage(page);

  await loginPage.navigateTo();
  await loginPage.expectPageVisible();
  await loginPage.loginForm.logIn(process.env.EMAIL!, process.env.PASSWORD!);
  await context.storageState({ path: 'auth.json' });
  await browser.close();
}

export default globalSetup;

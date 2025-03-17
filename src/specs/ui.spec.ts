import { Footer } from '@components/footer.component';
import { Header } from '@components/header.component';
import { HomePage } from '@pageobjects/home.page';
import { LoginPage } from '@pageobjects/login.page';
import { test as base } from '@playwright/test';

const test = base.extend<{ loginPage: LoginPage; homePage: HomePage; header: Header; footer: Footer }>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  header: async ({ page }, use) => {
    const header = new Header(page);
    await use(header);
  },
  footer: async ({ page }, use) => {
    const footer = new Footer(page);
    await use(footer);
  }
});

test.describe('Check login page', () => {
  test.beforeEach(async ({ header, loginPage, footer }) => {
    await loginPage.navigateTo();
    await header.expectHeaderVisible();
    await footer.expectFooterVisible();
  });

  test('check visibility', async ({ loginPage }) => {
    await loginPage.expectPageVisible();
  });

  test(`login with "${process.env.EMAIL}" user`, async ({ loginPage, header }) => {
    await loginPage.loginForm.logIn(process.env.EMAIL!, process.env.PASSWORD!);
    await header.expectHeaderVisible(true, process.env.USERNAME!);
  });
});

test.describe('Check login with cookies', () => {
  test.use({ storageState: 'auth.json' });

  test.beforeEach(async ({ homePage }) => {
    await homePage.navigateTo();
  });

  test('check visibility', async ({ header, homePage, footer }) => {
    await homePage.expectPageVisible();
    await header.expectHeaderVisible(true, process.env.USERNAME!);
    await footer.expectFooterVisible();
  });
});

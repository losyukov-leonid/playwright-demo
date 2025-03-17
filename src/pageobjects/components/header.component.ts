import { HeaderNavBar } from '@components/headerNavBar.component';
import { BasePage } from '@pageobjects/base.page';
import { expect, Page } from '@playwright/test';

export class Header extends BasePage {
  headerNavBar: HeaderNavBar;
  header = this.page.locator('header#header');
  logo = this.page.locator('div.logo');

  constructor(page: Page) {
    super(page);
    this.headerNavBar = new HeaderNavBar(page);
  }

  async expectHeaderVisible(): Promise<void>;
  async expectHeaderVisible(isLoggedIn: true, userName: string): Promise<void>;
  async expectHeaderVisible(isLoggedIn: boolean = false, userName?: string) {
    await expect(this.header).toBeVisible();
    await expect(this.logo).toBeVisible();
    if (isLoggedIn && userName !== undefined) {
      await this.headerNavBar.expectHeaderNavBarVisible(true, userName);
    } else {
      await this.headerNavBar.expectHeaderNavBarVisible();
    }
  }
}

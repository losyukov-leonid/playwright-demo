import { BasePage } from '@pageobjects/base.page';
import { expect } from '@playwright/test';

export class HeaderNavBar extends BasePage {
  navBar = this.page.locator('ul.navbar-nav');
  homeLink = this.navBar.locator('xpath=/li/a[@href="/"]');
  productsLink = this.navBar.locator('xpath=/li/a[@href="/products"]');
  cartLink = this.navBar.locator('xpath=/li/a[@href="/view_cart"]');
  signupLoginLink = this.navBar.locator('xpath=/li/a[@href="/login"]');
  logoutLink = this.navBar.locator('xpath=/li/a[@href="/logout"]');
  deleteAccountLink = this.navBar.locator('xpath=/li/a[@href="/delete_account"]');
  testCasesLink = this.navBar.locator('xpath=/li/a[@href="/test_cases"]');
  apiTestingLink = this.navBar.locator('xpath=/li/a[@href="/api_list"]');
  videoTutorialsLink = this.navBar.locator('xpath=/li/a[@href="https://www.youtube.com/c/AutomationExercise"]');
  contactUsLink = this.navBar.locator('xpath=/li/a[@href="/contact_us"]');
  loggedInUser = this.navBar.locator('xpath=/li[last()]');

  async expectHeaderNavBarVisible(): Promise<void>;
  async expectHeaderNavBarVisible(isLoggedIn: true, userName: string): Promise<void>;
  async expectHeaderNavBarVisible(isLoggedIn: boolean = false, userName?: string) {
    await expect(this.navBar).toBeVisible();
    await expect(this.homeLink).toBeVisible();
    await expect(this.productsLink).toBeVisible();
    await expect(this.cartLink).toBeVisible();
    await expect(this.testCasesLink).toBeVisible();
    await expect(this.apiTestingLink).toBeVisible();
    await expect(this.videoTutorialsLink).toBeVisible();
    await expect(this.contactUsLink).toBeVisible();
    if (isLoggedIn && userName !== undefined) {
      await expect(this.logoutLink).toBeVisible();
      await expect(this.deleteAccountLink).toBeVisible();
      await expect(this.loggedInUser).toBeVisible();
      await expect(this.loggedInUser).toContainText(userName);
    } else {
      await expect(this.signupLoginLink).toBeVisible();
    }
  }
}

import { BasePage } from '@pageobjects/base.page';
import { expect } from '@playwright/test';

export class Footer extends BasePage {
  footer = this.page.locator('footer#footer');
  title = this.footer.locator('xpath=//h2');
  searchForm = this.footer.locator('form.searchform');
  emailInput = this.footer.getByPlaceholder('Your email address');
  submitBtn = this.footer.locator('xpath=//button');
  description = this.footer.locator('xpath=//p[not(@class)]');
  copyrightText = this.footer.locator('xpath=//p[@class]');

  async expectFooterVisible() {
    await expect(this.footer).toBeVisible();
    await expect(this.title).toBeVisible();
    await expect(this.searchForm).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.submitBtn).toBeVisible();
    await expect(this.description).toBeVisible();
    await expect(this.copyrightText).toBeVisible();
  }
}

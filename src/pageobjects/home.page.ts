import { BasePage } from '@pageobjects/base.page';
import { expect } from '@playwright/test';

export class HomePage extends BasePage {
  slider = this.page.locator('section#slider');
  productSection = this.page.locator('//section[not(@id)]');

  async expectPageVisible() {
    await expect(this.slider).toBeVisible();
    await expect(this.productSection).toBeVisible();
  }
}

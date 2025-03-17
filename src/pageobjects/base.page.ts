import { Page } from '@playwright/test';

export class BasePage {
  page: Page;
  pageUrl = '';

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo() {
    await this.page.goto(this.pageUrl, { waitUntil: 'networkidle' });
  }
}

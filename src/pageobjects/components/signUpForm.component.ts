import { BasePage } from '@pageobjects/base.page';
import { expect } from '@playwright/test';

export class SignUpForm extends BasePage {
  form = this.page.locator('div.signup-form');
  nameInput = this.page.getByTestId('signup-name');
  emailInput = this.page.getByTestId('signup-email');
  signUpBtn = this.page.getByTestId('signup-button');

  async logIn(name: string, email: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.signUpBtn.click();
  }

  async expectFormVisible() {
    await expect(this.form).toBeVisible();
    await expect(this.nameInput).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.signUpBtn).toBeVisible();
  }
}

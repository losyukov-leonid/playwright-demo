import { BasePage } from '@pageobjects/base.page';
import { expect } from '@playwright/test';

export class LoginForm extends BasePage {
  form = this.page.locator('div.login-form');
  title = this.form.locator('xpath=/h2');
  emailInput = this.page.getByTestId('login-email');
  passwordInput = this.page.getByTestId('login-password');
  logInBtn = this.page.getByTestId('login-button');

  async logIn(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await Promise.all([
      this.page.waitForResponse(
        (response) =>
          response.url().includes('/login') && response.request().method() === 'POST' && response.status() === 302
      ),
      this.logInBtn.click()
    ]);
  }

  async expectFormVisible() {
    await expect(this.form).toBeVisible();
    await expect(this.title).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.logInBtn).toBeVisible();
  }
}

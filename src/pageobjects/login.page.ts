import { BasePage } from '@pageobjects/base.page';
import { LoginForm } from '@components/loginForm.component';
import { SignUpForm } from '@components/signUpForm.component';
import { Page } from '@playwright/test';

export class LoginPage extends BasePage {
  override pageUrl = '/login';
  loginForm: LoginForm;
  signUpForm: SignUpForm;

  constructor(page: Page) {
    super(page);
    this.loginForm = new LoginForm(page);
    this.signUpForm = new SignUpForm(page);
  }

  async expectPageVisible() {
    await this.loginForm.expectFormVisible();
    await this.signUpForm.expectFormVisible();
  }
}

import 'tsconfig-paths/register';
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './src/specs',
  tsconfig: './tsconfig.json',
  reporter: [['list', { printSteps: true }], ['html', { open: 'always' }], ['allure-playwright']],
  use: {
    baseURL: 'https://automationexercise.com',
    headless: true,
    testIdAttribute: 'data-qa'
  },
  globalSetup: require.resolve('./global-setup'),
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'iPhone',
      use: { ...devices['iPhone 15 Pro Max'] }
    }
  ]
});

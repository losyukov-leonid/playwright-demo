import { expect, test } from '@playwright/test';

test.describe('GET user account detail by email', () => {
  test('200 OK', async ({ request }) => {
    const response = await request.get(`/api/getUserDetailByEmail?email=${process.env.EMAIL}`);
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.responseCode).toBe(200);
    expect(responseBody.user.id).toBe(608120);
    expect(responseBody.user.name).toBe(process.env.USERNAME);
    expect(responseBody.user.email).toBe(process.env.EMAIL);
    expect(responseBody.user.title).toBe('');
    expect(responseBody.user.birth_day).toBe(process.env.BIRTH_DAY);
    expect(responseBody.user.birth_month).toBe(process.env.BIRTH_MONTH);
    expect(responseBody.user.birth_year).toBe(process.env.BIRTH_YEAR);
    expect(responseBody.user.first_name).toBe(process.env.FIRST_NAME);
    expect(responseBody.user.last_name).toBe(process.env.LAST_NAME);
    expect(responseBody.user.company).toBe(process.env.COMPANY);
    expect(responseBody.user.address1).toBe(process.env.ADDRESS);
    expect(responseBody.user.address2).toBe('');
    expect(responseBody.user.country).toBe(process.env.CONUTRY);
    expect(responseBody.user.state).toBe(process.env.STATE);
    expect(responseBody.user.city).toBe(process.env.CITY);
    expect(responseBody.user.zipcode).toBe(process.env.ZIPCODE);
  });
});

test.describe('POST To Verify Login', () => {
  test('with valid details', async ({ request }) => {
    const response = await request.post('/api/verifyLogin', {
      form: {
        email: process.env.EMAIL!,
        password: process.env.PASSWORD!
      }
    });
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.responseCode).toBe(200);
    expect(responseBody.message).toBe('User exists!');
  });

  test('without email parameter', async ({ request }) => {
    const response = await request.post('/api/verifyLogin', {
      form: {
        password: process.env.PASSWORD!
      }
    });
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.responseCode).toBe(400);
    expect(responseBody.message).toBe('Bad request, email or password parameter is missing in POST request.');
  });
});

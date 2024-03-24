import { test } from "@playwright/test";
import pageUrls from '../../utils/pageUrls'
import { APIRequestContext, Page } from '@playwright/test';
import loginApiRequest from '../api/requests/api-login';

test.describe.configure({ mode: 'serial' });

let apiContext: APIRequestContext;
const username =  process.env.USERNAME!;
const password = process.env.PASSWORD!;
const apiUrl = process.env.API_URL!;


test.beforeAll(async ({ playwright }) => {
  apiContext = await playwright.request.newContext({
    // TODO - add api url to env file and import here
    //All requests we send go to this API endpoint.
    baseURL: apiUrl,
    extraHTTPHeaders: {
      //'Authorization': `Bearer ${token}`,
      Accept: 'application/json',
    },
  });
});

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  await page.goto(pageUrls.loginPage);
});

test.afterAll(async ({ }) => {
  // Dispose all responses.
  await apiContext.dispose();
});

test.describe("Login programatically", () => {
  test("Api login", async () => {
    await loginApiRequest.login(apiContext, username, password);

  });

});

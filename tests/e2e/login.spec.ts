import { test } from '@playwright/test';
import LoginPage from '../pages/login-page'
import pageUrls from '../../utils/pageUrls'

let loginPage: LoginPage;
const username =  process.env.USERNAME!;
const password = process.env.PASSWORD!;

test.describe.configure({ mode: 'serial' });

test.beforeEach(async ({ page }, testInfo) => {
    //navigate to login page url which is saved in util/pages
    console.log(`Running ${testInfo.title}`);
    await page.goto(pageUrls.loginPage);
    loginPage = new LoginPage(page);
});

test.describe("Login tests", () => {
  test("login successfully", async () => {
    await loginPage.login(username,password);    

  });

  test("invalid credentials", async () => {
    const invalidPassword = "Tests234";
    await loginPage.enterUsername(username);
    await loginPage.enterPassword(invalidPassword);
    await loginPage.clickLoginButton();
  } )
});

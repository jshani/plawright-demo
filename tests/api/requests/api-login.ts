import { APIRequestContext, expect } from '@playwright/test';
import { executeRequest } from '../../../utils/apiRequestUtils';


async function login(apiContext: APIRequestContext, username: string, password: string) {
  const method = 'post';
  const requestOptions = {
    data: {
        "userName": username,
        "password": password
    }
  };
  const requestUrl = 'https://demoqa.com/Account/v1/Authorized';
  const response = await executeRequest(apiContext, requestUrl, method, requestOptions);
  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy()
}

export default { login };
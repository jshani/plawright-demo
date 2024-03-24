import { APIRequestContext, expect } from '@playwright/test';
import { executeRequest } from '../../../utils/apiRequestUtils';
import endpoints from '../../../utils/apiEnpoints';

async function login(apiContext: APIRequestContext, username: string, password: string) {
  const method = 'post';
  const requestOptions = {
    data: {
        "userName": username,
        "password": password
    }
  };
  const requestUrl = endpoints.user.authorize;
  const response = await executeRequest(apiContext, requestUrl, method, requestOptions);
  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy()
}

export default { login };
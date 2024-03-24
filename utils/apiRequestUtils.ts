import { APIRequestContext, expect } from '@playwright/test';

export async function executeRequest(
  apiContext: APIRequestContext,
  requestUrl: string,
  method: string,
  requestOptions: object
) {
  try {
    const response = await apiContext[method](requestUrl, requestOptions);
    const responseStatusCode = await response.status();
    const responseOk = await response.ok();

    if (!responseOk) {
      const errorStatus = `Code: ${responseStatusCode} \r\n`;
      const responseStatus = `Status: ${responseOk} \r\n`;
      const errorResponse = `Response: ${await response.text()} \r\n`;
      throw `${errorStatus} ${errorResponse} ${responseStatus} `;
    }

    return response;

  } catch (error) {
    const errorRequestUrl = `Request url: ${requestUrl} \r\n`;
    const errorRequestMethod = `Method: ${method} \r\n`;
    const errorRequestOptions = `Request options: ${JSON.stringify(requestOptions)} \r\n`;

    throw new Error(
      `Invalid request! Failed on \'executeRequest\' method. \r\n ${errorRequestUrl} ${errorRequestMethod} ${errorRequestOptions} ${error}`
    );
  }
}

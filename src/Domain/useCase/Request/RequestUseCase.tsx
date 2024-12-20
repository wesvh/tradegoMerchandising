import { Request } from "../../../Data/repositories/Request";

const { requestHttps, retryableRequestHttps } = new Request();

export const RequestUseCase = async (
  endpoint: string,
  method: string,
  data: any = null,
  isPortal = false
) => {
  return await requestHttps(endpoint, method, data, isPortal);
};

export const RequestUseCaseRetry = async (
  endpoint: string,
  method: string,
  maxRetries: number,
  backoff: number,
  sleep: (ms: number) => Promise<void | unknown>,
  data: any = null
) => {
  return await retryableRequestHttps(endpoint, method, maxRetries, backoff, sleep, data);
};

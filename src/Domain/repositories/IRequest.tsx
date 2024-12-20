export interface IRequest {
  requestHttps(endpoint: string, method: string, data: any): Promise<void>;
  retryableRequestHttps(
    endpoint: string,
    method: string,
    maxRetries: number,
    backoff: number,
    sleep: (ms: number) => Promise<void>,
    data: any
  ): Promise<any>;
}

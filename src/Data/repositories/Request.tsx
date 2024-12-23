import { API_PORTAL } from "constant";
import { IRequest } from "../../Domain/repositories/IRequest";
import Api from "../source/remote/api";
const api = new Api();
const apiPortal = new Api(API_PORTAL);

export class Request implements IRequest {
  public async requestHttps(
    endpoint: string,
    method: string,
    data: any,
    isPortal = false
  ): Promise<any> {
    const currAp = isPortal ? apiPortal : api;    
    const response = await currAp.ExecutePetition(endpoint, method, data);    
    return response;
  }
  public async retryableRequestHttps(
    endpoint: string,
    method: string,
    maxRetries: number,
    backoff: number,
    sleep: (ms: number) => Promise<void | unknown>,
    data: any
  ): Promise<any> {
    return await api.ExecuteWithRetry(endpoint, method, maxRetries, backoff, sleep, data);
  }
}

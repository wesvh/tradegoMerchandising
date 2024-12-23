import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { API } from "../../../../Presentation/constants";

/***
 * @class Api
 * @description Clase que contiene las instancias de axios
 * @param {config} config ex: api.executePetition('[endpoints.ejemplo.dato("ejemplo")]', [method], [pointerOldOrNewAPI], [postJson])
 ***/

class Api {
  instance!: any;
  constructor() {
    this.executeBuilder(API);
  }

  executeBuilder = (rootAPI: any) => {
    this.instance = this.createInstance(rootAPI);
    this.instance.interceptors.response.use((opt: AxiosResponse) => {
      console.log(`${rootAPI}${opt.config.url}`, opt.config.method, "Code: ", opt.status);
      return opt;
    });
    this.instance.interceptors.request.use((opt: InternalAxiosRequestConfig) => {
      opt.headers.setAccept(Date.now());
      console.log(
        `${rootAPI}${opt.url}`,
        opt.method,
        opt.data ? "Data: " + JSON.stringify(opt.data) : ""
      );

      return opt;
    });
  };

  static createInstance() {
    const object = new Api();
    return object;
  }

  createInstance(url: string): AxiosInstance {
    return axios.create({
      baseURL: url,
      responseType: "json",
      timeout: 15000,
      headers: {
        accept: "*/*",
        "Content-Type": "application/json"
      }
    });
  }
  async ExecutePetition(url: string, method: string, data: any = null) {
    try {
      const res = await this.instance[method.toLowerCase()](url, data);
      if (res.status !== 200 && res.status !== 204 && res.status !== 201) {
        throw new Error("Error en la petición");
      }
      return res.data;
    } catch (e: any) {
      return { ...e?.response?.data, ok: false, err_catched: e };
    }
  }

  async ExecuteWithRetry(
    url: string,
    method: string,
    maxRetries: number,
    backoff: number,
    sleep: (ms: number) => Promise<void | unknown>,
    data: any = null
  ) {
    const maxDelay = 10000;
    let retries = 0;
    let delay = backoff;

    while (retries <= maxRetries) {
      const response = await this.ExecutePetition(url, method, data);

      // Si el estado es ok, retorna la respuesta
      if (response.ok !== false) {
        return response;
      }
      await sleep(Math.min(delay, maxDelay));
      // Incrementa el número de intentos y el tiempo de espera
      retries += 1;
      delay *= 1.2;
      console.log("Retrying request... with Delay: ", delay);
    }

    throw new Error("Max retries reached");
  }
}

export default Api;
import { Injectable } from '@angular/core';
import axios, {
  AxiosInstance,
  AxiosInterceptorManager,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

type HttpClientConfig = AxiosRequestConfig & { lang?: string };

@Injectable()
export class HttpClient {
  defaults: AxiosRequestConfig;
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse<any>>;
  };
  private provider: AxiosInstance;
  constructor(/* config?: HttpClientConfig */) {
    this.provider = axios.create(/* config */);
    this.interceptors = this.provider.interceptors;
    this.defaults = this.provider.defaults;
  }
  request<T = any>(config: AxiosRequestConfig): AxiosPromise<T> {
    return this.provider.request(config);
  }
  get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.provider.get(url, config);
  }
  delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.provider.delete(url, config);
  }
  head(url: string, config?: AxiosRequestConfig): AxiosPromise<any> {
    return this.provider.head(url, config);
  }
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.provider.post(url, data, config);
  }
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.provider.put(url, data, config);
  }
  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.provider.patch(url, data, config);
  }
}

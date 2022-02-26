import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import init from "./init";
import { InitInterface } from "./init.interface" 

class Http {
  private service:AxiosInstance;
  constructor( init: InitInterface ) {    
    this.defaultInit()    
    let service = axios.create({
      headers: init.customHeaders,
      params: init.customParams,
      baseURL: init.baseURL,  
      withCredentials: init.withCredentials,
    });    
    service.interceptors.response.use(init.handleSuccess, init.handleError);
    this.service = service;    
  }
  
  defaultInit () {
    init.customHeaders !== undefined ? init.customHeaders : {}
    init.customParams !== undefined ? init.customParams : {}
    init.baseURL !== undefined ? init.baseURL : "http://localhost"
    init.withCredentials !== undefined ? init.withCredentials : false
    init.handleSuccess !== undefined ? init.handleSuccess : this.defaultHandleSuccess
    init.handleError !== undefined ? init.handleError : this.defaultHandleError  
  }
  
  defaultHandleSuccess(response: AxiosResponse ) { return response; }
  
  defaultHandleError(error: AxiosError) { return error; }

  get(path: string) {
    return this.service.request({
      method: "GET",
      url: path,
      responseType: "json"
    });
  }

  patch(path: string, payload: any) {
    return this.service.request({
      method: "PATCH",
      url: path,
      responseType: "json",
      data: payload
    });
  }

  post(path: string, bodyPayload = false) {
    return this.service.request({
      method: "POST",
      url: path,
      responseType: "json",
      data: bodyPayload
    });
  }

  delete(path: string, bodyPayload = false) {
    return this.service.request({
      method: "DELETE",
      url: path,
      responseType: "json",
      data: bodyPayload
    });
  }
}

export default new Http( init );

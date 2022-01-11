import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cart, PastDays, TopSel, TopUniqueSel } from 'types';
import { HttpRequestModel } from '../model/http-request-model';
import { ConfigurationService } from './configuration.service';

@Injectable({ providedIn: 'root' })
export class CartsHttpService extends BaseHttpService {

  constructor(
    public http: HttpClient,
    private config: ConfigurationService) {
    super(http);
  }

  getCarts$(): Observable<Cart[]> {
    return this.post$({
      url: `${this.config.ips.servicePath}carts/`,
      action: 'GetCarts',
      params: {},
      body: {},
    } as HttpRequestModel)
  }

  addCart$(title:string,price:number): Observable<boolean> {
    return this.get$({
      url: `${this.config.ips.servicePath}carts/`,
      action: 'AddCart',
      params: {title,price},
      body: {},
    } as HttpRequestModel)
  } 

  deleteCart$(): Observable<boolean> {
    return this.get$({
      url: `${this.config.ips.servicePath}carts/`,
      action: 'DeleteCart',
      params: {},
    } as HttpRequestModel)
  }
   

  getTotal$(): Observable<number> {
    return this.get$({
      url: `${this.config.ips.servicePath}carts/`,
      action: 'GetTotal',
      params: {},
      body: {},
    } as HttpRequestModel)
  }

}

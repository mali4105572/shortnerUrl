import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from 'types';
import { HttpRequestModel } from '../model/http-request-model';
import { ConfigurationService } from './configuration.service';

@Injectable({ providedIn: 'root' })
export class ProductsHttpService extends BaseHttpService {

  constructor(
    public http: HttpClient,
    private config: ConfigurationService) {
    super(http);
  }

  getProducts$(): Observable<Product[]> {
    return this.post$({
      url: `${this.config.ips.servicePath}products/`,
      action: 'GetProducts',
      params: {},
      body: {},
    } as HttpRequestModel)
  }

  addProduct$(title:string,price:number,description:string,image:string): Observable<boolean> {
    return this.post$({
      url: `${this.config.ips.servicePath}products/`,
      action: 'AddProduct',
      params: { title,price,description,image },
      body: {},
    } as HttpRequestModel)
  }

  editProduct$(title:string,price:number,description:string,image:string, id: number): Observable<boolean> {
    return this.post$({
      url: `${this.config.ips.servicePath}products/`,
      action: 'EditProduct',
      params: { title,price,description,image,id },
      body: {},
    } as HttpRequestModel)
  }

  deleteProduct$(id: number): Observable<boolean> {
    return this.get$({
      url: `${this.config.ips.servicePath}products/`,
      action: 'DeleteProduct',
      params: { id },
    } as HttpRequestModel)
  }

}

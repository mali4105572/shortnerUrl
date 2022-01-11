import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpRequestModel } from '../model/http-request-model';
import { ConfigurationService } from './configuration.service';
import { Cart, PastDays, TopSel, TopUniqueSel } from 'types';

@Injectable({ providedIn: 'root' })
export class SalesHttpService extends BaseHttpService {

  constructor(
    public http: HttpClient,
    private config: ConfigurationService) {
    super(http);
  }


  addSale$(title:string,count:number,total:number): Observable<boolean> {
    return this.post$({
      url: `${this.config.ips.servicePath}sales/`,
      action: 'AddSale',
      params: { title,count,total },
      body: {},
    } as HttpRequestModel)
  }

  
  getTopSel$(): Observable<TopSel[]> {
    return this.post$({
      url: `${this.config.ips.servicePath}sales/`,
      action: 'GetTopSel',
      params: {},
      body: {},
    } as HttpRequestModel)
  }

  getTopUniqueSel$(): Observable<TopUniqueSel[]> {
    return this.post$({
      url: `${this.config.ips.servicePath}sales/`,
      action: 'GetTopUniqueSel',
      params: {},
      body: {},
    } as HttpRequestModel)
  }

  getPastDays$(): Observable<PastDays[]> {
    return this.post$({
      url: `${this.config.ips.servicePath}sales/`,
      action: 'GetPastDays',
      params: {},
      body: {},
    } as HttpRequestModel)
  }


}

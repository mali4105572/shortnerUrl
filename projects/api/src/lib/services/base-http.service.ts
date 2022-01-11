import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpRequestModel } from '../model/http-request-model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BaseHttpService {

  constructor(
    protected http: HttpClient
  ) { }

  get$<T = string>(httpRequest: HttpRequestModel): Observable<T> {
    if (httpRequest.isText) { return this.get$(httpRequest); }
    const url = `${httpRequest.url}${httpRequest.action}`;
    return this.http.get<T>(url,
      { params: { ...httpRequest.params } });
  }

  getList$<T = string>(httpRequest: HttpRequestModel): Observable<T[]> {
    if (httpRequest.isText) { return this._get$(httpRequest); }
    return this.http.get<T>(httpRequest.fullUrl,
      { params: { ...httpRequest.params } }).pipe(
        map(resp => resp as any as T[])
      );
  }

  post$<T = string>(httpRequest: HttpRequestModel): Observable<T> {
    if (httpRequest.isText) { return this._post$(httpRequest); }
    const url = `${httpRequest.url}${httpRequest.action}`;
    return this.http.post<T>(url, httpRequest.body,
      { params: { ...httpRequest.params } });
  }

  private _get$(httpRequest: HttpRequestModel): Observable<any> {
    const url = `${httpRequest.url}${httpRequest.action}`;
    return this.http.get(url,
      { params: { ...httpRequest.params }, responseType: 'text' }
    );
  }

  private _post$(httpRequest: HttpRequestModel): Observable<any> {
    return this.http.post(httpRequest.fullUrl, httpRequest.body,
      { params: { ...httpRequest.params }, responseType: 'text' }
    );
  }

}

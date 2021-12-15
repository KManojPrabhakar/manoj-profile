import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  get(url: string, params: any = {}, useRawParams: boolean = false): Observable<any> {
    if (!useRawParams) {
      let httpParams: HttpParams = new HttpParams();
      Object.keys(params).forEach( key => {
      httpParams = httpParams.append(key, params[key]); });

      params = httpParams;
    }

    return this.http.get(url );
  }
  post(url: string, payload?: any) {
    return this.http.post(url, payload);
  }
  put(url: string, payload?: any) {
    return this.http.put(url, payload);
  }

  deleteHttp(url: string,payload?: any) {
    return this.http.delete(url, payload);
  }
}

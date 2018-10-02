import { EmanConfig } from './../../config/eman-config';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  apiBaseUrl: string  = EmanConfig.apiBaseUrl;
  constructor(private http: HttpClient) { }

  getEvents(data, title?): Observable<any> {
    const url = title ? `${this.apiBaseUrl}/event?_id=${data}` : `${this.apiBaseUrl}/event/all-events?_id=${data}`;
    return this.http.get(url)
    .pipe(
      map((res) => {
        return res;
      }),
      catchError(err => {
        throw(err);
      })
    );
  }

  create(data): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/event`, data)
    .pipe(
      map((res) => {
        return res;
      }),
      catchError(err => {
        throw(err);
      })
    );
  }

  update(data): Observable<any> {
    return this.http.put(`${this.apiBaseUrl}/event`, data)
    .pipe(
      map((res) => {
        return res;
      }),
      catchError(err => {
        throw(err);
      })
    );
  }

  delete(data): Observable<any> {
    return this.http.delete(`${this.apiBaseUrl}/event/${data._id}`)
    .pipe(
      map((res) => {
        return res;
      }),
      catchError(err => {
        throw(err);
      })
    );
  }
}

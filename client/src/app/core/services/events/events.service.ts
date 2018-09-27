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

  getEvents(data): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/event/all-events?_id=${data}`)
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

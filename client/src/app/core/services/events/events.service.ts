import { EventItem } from './../../models/event-item';
import { EmanConfig } from './../../config/eman-config';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/Observable/of';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  apiBaseUrl: string  = EmanConfig.apiBaseUrl;
  events: Array<EventItem> = [];

  constructor(private http: HttpClient) { }

  getEvents(data, title?): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/event/all-events?_id=${data}`)
    .pipe(
      map((res) => {
        this.events = res['events'];
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

  getEventById(eventId): Observable<EventItem> {
    if ( this.events.length > 0) {
      let filterEvent: EventItem;
      for (const event of this.events) {
        if (event._id === eventId) {
          filterEvent = event;
          break;
        }
      }
      return of(filterEvent);
    } else if (this.events.length === 0) {
      return this.http.get<{event: EventItem}>(`${this.apiBaseUrl}/event?_id=${eventId}`)
        .pipe(
          map((res) => {
            return res.event;
          }),
          catchError(err => {
            throw(err);
          })
        );
    }
  }
}

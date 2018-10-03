import { of } from 'rxjs/Observable/of';
import { EmanConfig } from './../../config/eman-config';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Image } from './../../models/image';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  images: Array<Image> = [];
  apiBaseUrl: string  =  EmanConfig.apiBaseUrl;

  constructor(
    private http: HttpClient
  ) { }

  get(entityId): Observable<Array<Image>> {
    return this.http.get(`${this.apiBaseUrl}/images/all/${entityId}`)
    .pipe(
      map((res) => {
        this.images = res['images'];
        return res['images'];
      }),
      catchError((err) => {
      throw(err);
      })
    );
  }
}

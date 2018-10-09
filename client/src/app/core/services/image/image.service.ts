import { environment } from './../../../../environments/environment';
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
  apiBaseUrl: string  =  environment.apiBaseUrl;

  constructor(
    private http: HttpClient
  ) { }

  get(entityId): Observable<Array<Image>> {
    return this.http.get<{images: Image[]}>(`${this.apiBaseUrl}/images/all/${entityId}`)
    .pipe(
      map((res) => {
        this.images = res.images;
        return res.images;
      }),
      catchError((err) => {
      throw(err);
      })
    );
  }
}

import { Organzation } from './../../../admin/organizations/organizations.component';
import { environment } from './../../../../environments/environment';
import { UserService } from './../user/user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
apiBaseUrl: string  = environment.apiBaseUrl;
user: any;

  constructor(private http: HttpClient, private userService: UserService) {
  }

  get(): Observable<any> {
    this.user = this.userService.getUser();
    return this.http.get<{organzations: Array<Organzation>}>(`${this.apiBaseUrl}/organizations?_id=${this.user._id}`)
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
    data.userId = this.userService.getUser()._id;
    return this.http.post(`${this.apiBaseUrl}/organization`, data)
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
    return this.http.put(`${this.apiBaseUrl}/organization`, data)
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
    return this.http.delete(`${this.apiBaseUrl}/organization/${data._id}`)
    .pipe(
      map((res) => {
        return res;
      }),
      catchError(err => {
        throw(err);
      })
    );
  }

  getOrganizationById(organizationId): Observable<any> {
    this.user = this.userService.getUser();
    return this.http.get<{organzations: Array<Organzation>}>(`${this.apiBaseUrl}/organization?_id=${organizationId}`)
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

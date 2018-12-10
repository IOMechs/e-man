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

  constructor(private http: HttpClient) {
  }

  getOrganization(user): Observable<any> {
    return this.http.get<{organzations: Array<Organzation>}>(`${this.apiBaseUrl}/organizations?_id=${user._id}`)
    .pipe(
      map((res) => {
        return res;
      }),
      catchError(err => {
        throw(err);
      })
    );
  }

  create(userId): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/organization`, userId)
    .pipe(
      map((res) => {
        return res;
      }),
      catchError(err => {
        throw(err);
      })
    );
  }

  update(organization): Observable<any> {
    return this.http.put(`${this.apiBaseUrl}/organization`, organization)
    .pipe(
      map((res) => {
        return res;
      }),
      catchError(err => {
        throw(err);
      })
    );
  }

  delete(organization): Observable<any> {
    return this.http.delete(`${this.apiBaseUrl}/organization/${organization._id}`)
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

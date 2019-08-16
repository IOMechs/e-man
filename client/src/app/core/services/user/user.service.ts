import { EmanConstant } from './../../../../constant/eman-constant';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiBaseUrl: string  = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  getUser(): any {
    const user  = JSON.parse(localStorage.getItem(EmanConstant.eman_user));
    return user;
  }
  setUser(data): any {
    localStorage.setItem(EmanConstant.eman_user, JSON.stringify(data));
  }

  updateUser(data): Observable<any> {
    return this.http.put(`${this.apiBaseUrl}/user`, data);
  }
}

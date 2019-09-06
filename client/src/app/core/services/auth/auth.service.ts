import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { EmanConstant } from './../../../../constant/eman-constant';


 @Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiBaseUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  isLoggednIn() {
    const key = localStorage.getItem(EmanConstant.eman_user) ? true : false;
    return key;
  }

  getToken() {
    const token = localStorage.getItem(EmanConstant.eman_token);
    return token;
  }


  login(loginData): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/login`, loginData).pipe(
      map((data: any) => {
        if (data['token']) {
          localStorage.setItem(EmanConstant.eman_token, data['token']);
          localStorage.setItem(EmanConstant.eman_user, JSON.stringify(data['user']));
          return data['user'];
        }
      }),
      catchError(err => {
        throw(err);
      })
    );
  }

  signup(signupData): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/signup`, signupData).pipe(
      map((data: any) => {
        if (data['token']) {
          localStorage.setItem(EmanConstant.eman_token, data['token']);
          localStorage.setItem(EmanConstant.eman_user, JSON.stringify(data['user']));
          return data['user'];
        }
      }),
      catchError(err => {
        throw(err);
      })
    );
  }

  forgotPassword(formData) {
    const message = 'An email has been sent to the email address entered above with details on how to reset your password'
    return message;
  }
}

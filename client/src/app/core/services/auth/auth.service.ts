import { EmanConstant } from './../../../../constant/eman-constant';
import { Login } from './../../common/login';
import { Injectable } from '@angular/core';
import  { EmanConfig } from '../../config/eman-config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mergeMap, catchError, first } from 'rxjs/operators';

 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiBaseUrl: String = EmanConfig.apiBaseUrl;

  constructor(private http: HttpClient) { }

  login(loginData) : Observable<any>{
    return this.http.post(`${this.apiBaseUrl}/login`, loginData).pipe(
      map((data: any)=>{
        if(data['token']){
          localStorage.setItem(EmanConstant.eman_token, data['token']);
          localStorage.setItem(EmanConstant.eman_user, JSON.stringify(data));
          return true;
        }
      }),
      catchError(err => {
        const error = (err.error && err.error.message)? err.error.message : err.message;
        return error;
      })
    )  
  }

  signup(signupData) : Observable<any>{
    return this.http.post(`${this.apiBaseUrl}/signup`, signupData).pipe(
      map((data: any)=>{
        if(data['token']){
          localStorage.setItem(EmanConstant.eman_token, data['token']);
          localStorage.setItem(EmanConstant.eman_user, JSON.stringify(data));
          return true;
        }
      }),
      catchError(err => {
        const error = (err.error && err.error.message)? err.error.message : err.message;
        return error;
      })
    )  
  }
}

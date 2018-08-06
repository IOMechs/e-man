import { Login } from './../../common/login';
import { Injectable } from '@angular/core';
import  { EmanConfig } from '../../config/eman-config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiBaseUrl: String = EmanConfig.apiBaseUrl;

  constructor(private http: HttpClient) { }

  login(loginData) : Observable<any>{
  return this.http.post(`${this.apiBaseUrl}/login`, loginData);
  }

  signup(signupData) : Observable<any>{
    return this.http.post(`${this.apiBaseUrl}/signup`, signupData);
  }
}

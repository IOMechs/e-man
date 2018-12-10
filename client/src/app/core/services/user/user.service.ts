import { EmanConstant } from './../../../../constant/eman-constant';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  userSource: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  $user: Observable<User>;
  apiBaseUrl: string  = environment.apiBaseUrl;
  constructor(private http: HttpClient) {
    this.$user = this.userSource.asObservable();
    const user = localStorage.getItem(EmanConstant.eman_user);
    this.userSource.next(user ? JSON.parse(user) : null);
  }

  setUser(user): any {
    localStorage.setItem(EmanConstant.eman_user, JSON.stringify(user));
    this.userSource.next(user);
  }

  updateUser(user): Observable<any> {
    return this.http.put(`${this.apiBaseUrl}/user`, user);
  }
}

import { EmanConstant } from './../../../../constant/eman-constant';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(): any {
    const user  = JSON.parse(localStorage.getItem(EmanConstant.eman_user));
    return user;
  }
}

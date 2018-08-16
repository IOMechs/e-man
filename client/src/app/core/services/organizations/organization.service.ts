import { EmanConfig } from './../../config/eman-config';
import { UserService } from './../user/user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
apiBaseUrl: string  = EmanConfig.apiBaseUrl;
user: any;

  constructor(private http: HttpClient, private userService: UserService) { 

  }

  get() : Observable<any>{
    this.user = this.userService.getUser();
    return this.http.get(`${this.apiBaseUrl}/organizations?_id=${this.user._id}`)
    .pipe(

      map((res)=>{
        return res;
      }),
      catchError(err => {
        throw(err);
      })
    )

  }
}

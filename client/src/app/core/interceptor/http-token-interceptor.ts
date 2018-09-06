import { Observable } from 'rxjs';
import { AuthService } from './../services/auth/auth.service';
import { HttpRequest, HttpHandler, HttpHeaders, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class TokenInterceptor {
  constructor(private auth: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('in interceptor');
    let headers  = new HttpHeaders().set('Content-Type', 'application/json');
    const token = this.auth.getToken();
    if (token) {
      headers = headers.set('Authorization', token);
    }
    const request = req.clone({
      headers
    });

    return next.handle(request);

  }
}

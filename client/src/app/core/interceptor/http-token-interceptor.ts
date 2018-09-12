import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from './../services/auth/auth.service';
import { HttpRequest, HttpHandler, HttpHeaders, HttpInterceptor, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Injectable()
export class TokenInterceptor {
  constructor(private auth: AuthService, private spinner: NgxSpinnerService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.show();
    let headers  = new HttpHeaders().set('Content-Type', 'application/json');
    const token = this.auth.getToken();
    if (token) {
      headers = headers.set('Authorization', token);
    }
    const request = req.clone({
      headers
    });
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.spinner.hide();
          }
        },
        (err: any) => {
          this.spinner.hide();
        }
      )
    );
  }
}

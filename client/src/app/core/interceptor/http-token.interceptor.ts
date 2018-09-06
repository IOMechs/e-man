import { AuthService } from './../services/auth/auth.service';
import { HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';


export class TokenInterceptor {
  constructor(private auth: AuthService) {
  }

  interceptor(req: HttpRequest<any>, next: HttpHandler) {
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

import { TokenInterceptor } from './interceptor/http-token.interceptor';
import { AuthService } from './services/auth/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guard/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [
    AuthGuard,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }

  ]

})
export class CoreModule { }

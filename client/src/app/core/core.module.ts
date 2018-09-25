import { EventsService } from './services/events/events.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { OrganizationService } from './services/organizations/organization.service';

import { AuthService } from './services/auth/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guard/auth.guard';
import { TokenInterceptor } from './interceptor/http-token-interceptor';
import { ImageService } from './services/image/image.service';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [
    AuthGuard,
    AuthService,
    OrganizationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    EventsService,
    ImageService
  ]

})
export class CoreModule { }

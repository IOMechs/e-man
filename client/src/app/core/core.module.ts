import { OrganizationService } from './services/organizations/organization.service';

import { AuthService } from './services/auth/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guard/auth.guard';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [
    AuthGuard,
    AuthService,
    OrganizationService,
  ]

})
export class CoreModule { }

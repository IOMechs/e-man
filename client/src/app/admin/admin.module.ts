
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { OrganizationsModule } from '../organizations/organizations.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    OrganizationsModule
  ],
  declarations: [
    AdminComponent
  ]
})
export class AdminModule { }

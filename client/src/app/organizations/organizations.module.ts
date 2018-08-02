import { OrganizationsComponent } from './organizations.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationsRoutingModule } from './organizations-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OrganizationsRoutingModule
  ],
  declarations: [
    OrganizationsComponent
  ]
})
export class OrganizationsModule { }

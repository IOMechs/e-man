import { DeleteWarningDialogComponent } from './../shared/components/delete-warning-dialog/delete-warning-dialog.component';
import { OranizationDialogComponent } from './../shared/components/oranization-dialog/oranization-dialog.component';

import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { OrganizationsComponent } from './organizations/organizations.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { EventsComponent } from './events/events.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ],
  declarations: [
    AdminComponent,
    OrganizationsComponent,
    DashboardComponent,
    EventsComponent,
  ],
  entryComponents: [
    OranizationDialogComponent,
    DeleteWarningDialogComponent
]
})
export class AdminModule { }

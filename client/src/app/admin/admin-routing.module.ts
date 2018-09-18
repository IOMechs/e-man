import { EventsComponent } from './events/events.component';
import { AuthService } from './../core/services/auth/auth.service';
import { OrganizationsComponent } from './organizations/organizations.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../core/guard/auth.guard';

const routes: Routes = [
  { path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'organizations',
        component: OrganizationsComponent,
      },
      {
        path: 'organization/:id/events',
        component: EventsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

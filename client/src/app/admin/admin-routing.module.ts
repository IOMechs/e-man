import { EventsComponent } from './events/events.component';
import { AuthService } from './../core/services/auth/auth.service';
import { OrganizationsComponent } from './organizations/organizations.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../core/guard/auth.guard';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'organizations',
      },
      {
        path: 'organizations',
        component: OrganizationsComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'organization/:id/events',
        component: EventsComponent,
      },
      {
        path: 'organization/:id/event/:eventId/images',
        component: ImageGalleryComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

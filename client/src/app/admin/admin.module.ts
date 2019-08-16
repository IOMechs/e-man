import { EntityListComponent } from './../shared/components/entity-list/entity-list.component';
import { DeleteWarningDialogComponent } from './../shared/components/delete-warning-dialog/delete-warning-dialog.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { OrganizationsComponent } from './organizations/organizations.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { EventsComponent } from './events/events.component';
import { EntityDialogComponent } from '../shared/components/entity-dialog/entity-dialog.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { UploadImagesDialogComponent } from '../shared/components/upload-images-dialog/upload-images-dialog.component';
import { ProfileComponent } from './profile/profile.component';

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
    ImageGalleryComponent,
    ProfileComponent,
  ],
  entryComponents: [
    DeleteWarningDialogComponent,
    EntityDialogComponent,
    UploadImagesDialogComponent
  ]
})
export class AdminModule { }

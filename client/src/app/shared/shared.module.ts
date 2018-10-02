import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialCustomModule } from './material-custom/material-custom.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DeleteWarningDialogComponent } from './components/delete-warning-dialog/delete-warning-dialog.component';
import { EntityDialogComponent } from './components/entity-dialog/entity-dialog.component';
import { EntityListComponent } from './components/entity-list/entity-list.component';
import { UploadImagesDialogComponent } from './components/upload-images-dialog/upload-images-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialCustomModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    DeleteWarningDialogComponent,
    EntityDialogComponent,
    EntityListComponent,
    UploadImagesDialogComponent
  ],
  exports: [
    MaterialCustomModule,
    HeaderComponent,
    SidebarComponent,
    ReactiveFormsModule,
    HttpClientModule,
    EntityListComponent
  ]
})
export class SharedModule { }

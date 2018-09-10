import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialCustomModule } from './material-custom/material-custom.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OranizationDialogComponent } from './components/oranization-dialog/oranization-dialog.component';
import { DeleteWarningDialogComponent } from './components/delete-warning-dialog/delete-warning-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialCustomModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [HeaderComponent, SidebarComponent, OranizationDialogComponent, DeleteWarningDialogComponent],
  exports: [
    MaterialCustomModule,
    HeaderComponent,
    SidebarComponent,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class SharedModule { }

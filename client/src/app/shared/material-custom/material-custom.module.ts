import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFileUploadModule } from 'angular-material-fileupload';
import {
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatOptionModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSelectModule,
    MatSnackBarModule,
    MatFileUploadModule,
    MatTableModule,
    MatTooltipModule
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSelectModule,
    MatSnackBarModule,
    MatFileUploadModule,
    MatTableModule,
    MatTooltipModule
  ]
})
export class MaterialCustomModule { }

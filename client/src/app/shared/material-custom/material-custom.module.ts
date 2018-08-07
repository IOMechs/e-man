import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, 
  MatInputModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatCheckboxModule
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
  ]
})
export class MaterialCustomModule { }

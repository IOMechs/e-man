import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, 
  MatInputModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, 
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule
  ],
  declarations: [],
  exports: [
    MatButtonModule, 
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule
  ]
})
export class MaterialCustomModule { }

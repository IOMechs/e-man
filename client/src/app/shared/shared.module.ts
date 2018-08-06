import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialCustomModule } from './material-custom/material-custom.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialCustomModule,
    RouterModule
  ],
  declarations: [HeaderComponent, SidebarComponent],
  exports: [
    MaterialCustomModule,
    HeaderComponent,
    SidebarComponent
  ]
})
export class SharedModule { }

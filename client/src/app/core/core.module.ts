import { AuthService } from './services/auth/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guard/auth.guard';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers:[
    AuthGuard,
    AuthService
  ]

})
export class CoreModule { }

import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginDialogComponent } from './core/components/login-dialog/login-dialog.component';
import { SignupDialogComponent } from './core/components/signup-dialog/signup-dialog.component';


const routes: Routes = [
  {path:'',
   component: AppComponent        
  },{
    path:'login',
    component: LoginDialogComponent
  },{
    path:'register',
    component: SignupDialogComponent
  },{
    path:'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

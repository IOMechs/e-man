import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'admin',
    pathMatch: 'full'        
  },{
    path:'login',
    component: LoginComponent
  },{
    path:'register',
    component: SignupComponent
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

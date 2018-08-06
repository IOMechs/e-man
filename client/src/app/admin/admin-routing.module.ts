import { OrganizationsComponent } from './organizations/organizations.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path:'',
    component: AdminComponent,
    children:[
      {
        path: '',
        component: DashboardComponent
      },
      { 
        path:'organizations',
        component: OrganizationsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

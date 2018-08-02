import { OrganizationsComponent } from './organizations.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'',
    component: OrganizationsComponent,
    // @ todo: children:[
    //   { path:'organizations',
    //     component: OrganizationsComponent
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationsRoutingModule { }

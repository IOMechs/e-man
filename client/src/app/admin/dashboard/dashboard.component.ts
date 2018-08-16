import { OrganizationService } from './../../core/services/organizations/organization.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'em-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private organizationService: OrganizationService) { }

  ngOnInit() {
  this.getOrganization();  
  }

  getOrganization(){
    this.organizationService.get()
    .subscribe(
      (data:any) => {
        console.log(data);
      },
      (err)=>{
        console.log(err);
      }
    )
  }

}

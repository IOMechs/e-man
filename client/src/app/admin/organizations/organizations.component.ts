import { Router } from '@angular/router';
import { OrganizationService } from './../../core/services/organizations/organization.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'em-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {

  organizations: any = {type: 'organization', list: []};

  constructor(private organizationService: OrganizationService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getOrganization();
  }

  getOrganization() {
    this.organizationService.get()
    .subscribe(
      (data: any) => {
        // tslint:disable-next-line:max-line-length
        this.organizations =  data['organizations'] && data['organizations'].length > 0 ? {type: 'organization', list: data['organizations']} : {type: 'organization', list: []};
      },
      (err) => {
        this.snackBar.open(`Internal Server Error`, '' , {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
      }
    );
  }
}

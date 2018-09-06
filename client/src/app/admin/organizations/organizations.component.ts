import { OranizationDialogComponent } from './../../shared/components/oranization-dialog/oranization-dialog.component';
import { OrganizationService } from './../../core/services/organizations/organization.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'em-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {

  organizations: any = [] ;
  constructor(private organizationService: OrganizationService, private dialog: MatDialog) { }

  ngOnInit() {
  this.getOrganization();
  }

  getOrganization() {
    this.organizationService.get()
    .subscribe(
      (data: any) => {
        this.organizations =  data['organization'];
      },
      (err) => {
        console.log(err);
      }
    );
  }

  createOrganization(formData) {
    this.organizationService.create(formData)
    .subscribe(
      (data: any) => {
        this.organizations.unshift(data.organization);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  openOrgDialog() {
    const dialogRef = this.dialog.open(OranizationDialogComponent, {
      data: { header : 'Add organization'},
      height: '400px',
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== '') {
        result['createdOn'] = Date();
      this.createOrganization(result);
      }
    });
  }

}

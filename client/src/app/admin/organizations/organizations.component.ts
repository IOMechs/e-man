import { DeleteWarningDialogComponent } from './../../shared/components/delete-warning-dialog/delete-warning-dialog.component';
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

  updateOrganization(formData) {
    this.organizationService.update(formData)
    .subscribe(
      (data: any) => {
        console.log(data);
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

  deleteOrganization(formData) {
    if (formData) {
      this.organizationService.delete(formData)
    .subscribe(
      (data: any) => {
        this.getOrganization();
      },
      (err) => {
        console.log(err);
      }
    );
    }
  }

  openOrgDialog(title, data?) {
    const dialogRef = this.dialog.open(OranizationDialogComponent, {
      data: { header : title === 'add' ? 'Add organization' : 'Edit organization', orgData: data ? data : null},
      height: '400px',
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== '') {
        if (title === 'add') {
          result['createdOn'] = Date();
          this.createOrganization(result);
        } else {
         const res = Object.assign(data, result);
          this.updateOrganization(res);
        }
      }
    });
  }

  openWarningDialog(data) {
    const dialogRef = this.dialog.open(DeleteWarningDialogComponent, {
      height: '150px',
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result === true) {
        this.deleteOrganization(data);
      }
    });
  }

}

import { EntityDialogComponent } from './../../shared/components/entity-dialog/entity-dialog.component';
import { Router } from '@angular/router';
import { DeleteWarningDialogComponent } from './../../shared/components/delete-warning-dialog/delete-warning-dialog.component';
import { OrganizationService } from './../../core/services/organizations/organization.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';



@Component({
  selector: 'em-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {

  organizations: any = [];
  dataSource: any = [];
  displayedColumns: string[] = ['no.', 'image', 'name', 'description', 'createAt', 'action'];

  constructor(private organizationService: OrganizationService, private dialog: MatDialog,
    private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
  this.getOrganization();

  }

  getOrganization() {
    this.organizationService.get()
    .subscribe(
      (data: any) => {
        this.organizations =  data['organization'] && data['organization'].length > 0 ? data['organization'] : [];
        this.dataSource = new MatTableDataSource(this.organizations);
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
        this.showToast('Updated');
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
        this.showToast('Create');
        this.organizations.unshift(data['organization']);
        this.dataSource = new MatTableDataSource(this.organizations);
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
        this.showToast('Delete');
        this.getOrganization();
      },
      (err) => {
        console.log(err);
      }
    );
    }
  }

  openOrgDialog(title, data?, event?) {
    if (event) {
      event.stopPropagation();
    }
    const dialogRef = this.dialog.open(EntityDialogComponent, {
      // tslint:disable-next-line:max-line-length
      data: { header : title === 'add' ? 'Add Organization' : 'Edit Organization', entityData: data ? data : null, entityType: 'Organization'},
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

  openWarningDialog(data, event?) {
    if (event) {
      event.stopPropagation();
    }
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

  event(organization) {
    this.router.navigate(['organization/' + organization._id]);
  }

  showToast(title) {
    this.snackBar.open(`Organization ${title} Sucessfully`, '' , {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  moveToEvent(data) {
    this.router.navigateByUrl(`admin/organization/${data._id}/events`);
  }
}

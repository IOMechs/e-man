import { EntityDialogComponent } from './../../shared/components/entity-dialog/entity-dialog.component';
import { OrganizationService } from './../../core/services/organizations/organization.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';

export interface Organzation {
  name: string;
  description: string;
  userId: string;
  createdAt: string;
}

@Component({
  selector: 'em-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {

  organizations: Organzation[] = [];
  filterValue = '';

  constructor(private organizationService: OrganizationService, private snackBar: MatSnackBar, private dialog: MatDialog ) { }

  ngOnInit() {
    this.getOrganization();
  }

  getOrganization() {
    this.organizationService.get()
    .subscribe(
      (data: Organzation[]) => {
        this.organizations =  data['organizations'] && data['organizations'].length > 0 ? data['organizations']  : [];
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

  resendList(list) {
    this.organizations = [].concat(list);
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue.trim().toLowerCase();
  }

  openDialog(title, data?, index?, event?) {
    if (event) {
      event.stopPropagation();
    }
    const dialogRef = this.dialog.open(EntityDialogComponent, {
      data: {
        header : `Add Organization`,
        entityData: data ? data : null,
        entityType: 'Organization'
      },
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== '') {
        if (title === 'add') {
          result['data']['createdAt'] = Date();
          this.createOrganization(result['data']);
        }
      }
    });
  }

  createOrganization(formData) {
    this.organizationService.create(formData)
    .subscribe(
      (data: Organzation) => {
        this.showToast('Create');
        this.organizations.unshift(data['organization']);
        this.organizations = [].concat(this.organizations);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  showToast(title) {
    this.snackBar.open(`Organization ${title} Sucessfully`, '' , {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }
}

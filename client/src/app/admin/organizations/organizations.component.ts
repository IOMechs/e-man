import { EntityDialogComponent } from './../../shared/components/entity-dialog/entity-dialog.component';
import { OrganizationService } from './../../core/services/organizations/organization.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';
import { UserService } from 'src/app/core/services/user/user.service';
import { first } from 'rxjs/internal/operators/first';
import { mergeMap } from 'rxjs/operators';

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

  constructor(
    private organizationService: OrganizationService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getOrganization();
  }

  getOrganization() {
    this.userService.$user
    .pipe(
      first(),
      mergeMap(user => {
        return this.organizationService.getOrganization(user);
      })
    )
    .subscribe(
      (resp) => {
        this.organizations =  resp.organizations && resp.organizations.length > 0 ? resp.organizations  : [];
      },
      (err) => {
        this.showToast(`Internal Server Error`);
      }
    );
  }

  resendList(list) {
    this.organizations = [].concat(list);
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue.trim().toLowerCase();
  }

  addNewOrganization() {
    const dialogRef = this.dialog.open(EntityDialogComponent, {
      data: {
        header : `Add Organization`,
        entityType: 'Organization'
      },
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result !== null) {
        result.data.createdAt = Date();
        result.data.imageUrl = result.file;
        this.createOrganization(result.data);
      }
    });
  }

  createOrganization(formData) {
    this.organizationService.create(formData)
    .subscribe(
      (data) => {
        this.showToast('Organization Create Sucessfully');
        this.organizations = [data.organization, ...this.organizations];
        this.organizations = [...this.organizations];
      },
      (err) => {
        this.showToast(`Internal Server Error`);
      }
    );
  }

  showToast(message) {
    this.snackBar.open(message, '' , {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }
}

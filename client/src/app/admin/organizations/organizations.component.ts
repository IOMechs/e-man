import { EntityDialogComponent } from './../../shared/components/entity-dialog/entity-dialog.component';
import { OrganizationService } from './../../core/services/organizations/organization.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';
import { ImageService } from '../../core/services/image/image.service';

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

  constructor(private organizationService: OrganizationService,
    private snackBar: MatSnackBar, private dialog: MatDialog, private imageService: ImageService ) { }

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
        result['data']['createdAt'] = Date();
        result['data']['imageUrl'] = result['file'];
        this.createOrganization(result['data']);
      }
    });
  }

  createOrganization(formData) {
    this.organizationService.create(formData)
    .subscribe(
      (data: Organzation) => {
        this.showToast('Organization Create Sucessfully');
        this.organizations.unshift(data['organization']);
        this.organizations = [].concat(this.organizations);
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

import { DeleteWarningDialogComponent } from './../delete-warning-dialog/delete-warning-dialog.component';
import { Router } from '@angular/router';
import { EntityDialogComponent } from './../entity-dialog/entity-dialog.component';
import { OrganizationService } from './../../../core/services/organizations/organization.service';
import { MatTableDataSource, MatSnackBar, MatDialog } from '@angular/material';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { EventsService } from '../../../core/services/events/events.service';

@Component({
  selector: 'em-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent implements OnInit {

  dataSource: any = [];
  list: any = [];
  entityId: string;
  entityType: string;
  displayedColumns: string[] = ['no.', 'image', 'name', 'description'];

  @Input()
  set entityList(entity: any) {
    this.list = entity.list;
    this.dataSource = new MatTableDataSource(this.list);
    this.entityType = entity.type;
    this.entityId = entity.orgId;
  }

  constructor(private organizationService: OrganizationService, private dialog: MatDialog,
    private router: Router, private snackBar: MatSnackBar, private eventService: EventsService) { }

  ngOnInit() {
    this.setDisplayedColumns();
  }

  setDisplayedColumns() {
    if (this.entityType === 'event') {
      this.displayedColumns.push('eventDate');
    } else {
      this.displayedColumns.push('createAt');
    }
    this.displayedColumns.push('action');
  }

  openDialog(title, data?, event?) {
    if (event) {
      event.stopPropagation();
    }
    const dialogRef = this.dialog.open(EntityDialogComponent, {
      // tslint:disable-next-line:max-line-length
      data: {
        header : title === 'add' ? `Add ${this.entityType}` : `Edit ${this.entityType}`,
        entityData: data ? data : null,
        entityType: this.entityType === 'organization'  ? 'Organization' : 'Event'
      },
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== '') {
        if (title === 'add') {
          result['createdAt'] = Date();
          if (this.entityType === 'event') { result['organizationId'] =  this.entityId; }
          this.createEntity(result);
        } else {
         const res = Object.assign(data, result);
          this.updateEntity(res);
        }
      }
    });
  }
  openWarningDialog(data, index, event?) {
    if (event) {
      event.stopPropagation();
    }
    const dialogRef = this.dialog.open(DeleteWarningDialogComponent, {
      height: '150px',
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result === true) {
        this.deleteEntity(data, index);
      }
    });
  }

  updateEntity(formData) {
    const entityService = this.entityType === 'event' ? this.eventService : this.organizationService;
    entityService.update(formData)
    .subscribe(
      (data: any) => {
        this.showToast('Updated');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  createEntity(formData) {
    const entityService = this.entityType === 'event' ? this.eventService : this.organizationService;
    entityService.create(formData)
    .subscribe(
      (data: any) => {
        this.showToast('Create');
        this.list.unshift(data[this.entityType]);
        this.dataSource = new MatTableDataSource(this.list);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteEntity(formData, index?) {
    if (formData) {
      const entityService = this.entityType === 'event' ? this.eventService : this.organizationService;
      entityService.delete(formData)
        .subscribe(
        (data: any) => {
          this.removeElement(index);
          this.showToast('Delete');
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  showToast(title) {
    this.snackBar.open(`${this.entityType === 'event' ? 'Event' : 'Organization' } ${title} Sucessfully`, '' , {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  moveToEvent(data) {
    if (this.entityType === 'organization') {
      this.router.navigateByUrl(`admin/organization/${data._id}/events`, data);
    }
  }

  removeElement(index) {
    const list = this.list.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.list);
  }
}

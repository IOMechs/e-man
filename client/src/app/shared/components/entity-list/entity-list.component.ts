import { environment } from './../../../../environments/environment';
import { DeleteWarningDialogComponent } from './../delete-warning-dialog/delete-warning-dialog.component';
import { Router } from '@angular/router';
import { EntityDialogComponent } from './../entity-dialog/entity-dialog.component';
import { OrganizationService } from './../../../core/services/organizations/organization.service';
import { MatTableDataSource, MatSnackBar, MatDialog } from '@angular/material';
import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { EventsService } from '../../../core/services/events/events.service';

@Component({
  selector: 'em-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntityListComponent implements OnInit {

  dataSource: any = [];
  list: any = [];
  entityId: string;
  entityType: string;
  displayedColumns: string[] = ['no.', 'image', 'name', 'description'];
  apiBaseUrl: string  = environment.apiBaseUrl;

  @Input()
  set entityList(list: any) {
    this.list = list;
    this.dataSource = new MatTableDataSource(this.list);
  }

  @Input()
  set type(type: string) {
    this.entityType = type;
  }
  @Input()
  set applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @Output() updateList = new EventEmitter<any>();

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

  editEntity(data?, event?) {
    const eleIndex = this.list.indexOf(data);
    if (event) {
      event.stopPropagation();
    }
    const dialogRef = this.dialog.open(EntityDialogComponent, {
      data: {
        header : `Edit ${this.entityType}`,
        entityData: data ? data : null,
        entityType: this.entityType === 'organization'  ? 'Organization' : 'Event'
      },
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== '') {
        result['createdAt'] = Date();
        if (result.file !== '') {
          result.data['imageUrl'] = result.file + '?ts=' + Date.now();
        }
        const res = Object.assign(data, result['data']);
        this.updateEntity(res, eleIndex);
      }
    });
  }

  deleteEntity(data, event?) {
    const elementIndex = this.list.indexOf(data);
    if (event) {
      event.stopPropagation();
    }
    const dialogRef = this.dialog.open(DeleteWarningDialogComponent, {
      height: '150px',
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result === true) {
        this.removeEntity(data, elementIndex);
      }
    });
  }

  updateEntity(formData, index) {
    const entityService = this.entityType === 'event' ? this.eventService : this.organizationService;
    entityService.update(formData)
    .subscribe(
      (data: any) => {
        this.list[index] = data[this.entityType];
        this.updateList.emit(this.list);
        this.showToast('Updated');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  removeEntity(formData, index?) {
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

  moveToEvent(data) {
    if (this.entityType === 'organization') {
      this.router.navigateByUrl(`admin/organization/${data._id}/events`, data);
    } else {
      this.router.navigateByUrl(`admin/organization/${data.organizationId}/event/${data._id}/images`);
    }
  }

  removeElement(index) {
    const list = this.list.splice(index, 1);
    this.updateList.emit(this.list);
  }
}

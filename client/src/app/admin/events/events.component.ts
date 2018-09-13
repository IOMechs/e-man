import { DeleteWarningDialogComponent } from './../../shared/components/delete-warning-dialog/delete-warning-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { EntityDialogComponent } from './../../shared/components/entity-dialog/entity-dialog.component';
import { EventsService } from './../../core/services/events/events.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'em-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  orgId: string;
  events: any = [];
  constructor(private route: ActivatedRoute, private eventService: EventsService,
    private dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.orgId = params['id'];
   });
   this.getEvents();
  }

  getEvents() {
    this.eventService.getEvents(this.orgId)
    .subscribe(data => {
      this.events = (data.event && data.event.length > 0 ) ? data.event : [];
    },
    err => {
      console.log(err);
    });
  }

  createEvent(formData) {
    this.eventService.create(formData)
    .subscribe(
      (data: any) => {
        this.showToast('Create');
        this.events.unshift(data.event);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateEvent(formData) {
    this.eventService.update(formData)
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

  deleteEvent(formData) {
    if (formData) {
      this.showToast('Delete');
      this.eventService.delete(formData)
    .subscribe(
      (data: any) => {
        this.getEvents();
      },
      (err) => {
        console.log(err);
      }
    );
    }
  }

  openEventDialog(title, data?) {
    const dialogRef = this.dialog.open(EntityDialogComponent, {
      data: { header : title === 'add' ? 'Add Event' : 'Edit Event', entityData: data ? data : null, entityType: 'Event'},
      height: '400px',
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== '') {
        if (title === 'add') {
          result['createdOn'] = Date();
          result['organizationId'] =  this.orgId;
          this.createEvent(result);
        } else {
          const res = Object.assign(data, result);
          this.updateEvent(res);
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
        this.deleteEvent(data);
      }
    });
  }

  showToast(title) {
    this.snackBar.open(`Event ${title} Sucessfully`, '' , {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

}

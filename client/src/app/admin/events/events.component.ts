import { MatDialog, MatSnackBar } from '@angular/material';
import { EventsService } from './../../core/services/events/events.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EntityDialogComponent } from '../../shared/components/entity-dialog/entity-dialog.component';

export interface EventList {
  name: string;
  description: string;
  organizationId: string;
  eventDate: string;
  createdAt: string;
}

@Component({
  selector: 'em-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent implements OnInit {

  orgId: string;
  events: EventList[] = [];
  filterValue = '';

  constructor(private route: ActivatedRoute, private eventService: EventsService,
    private dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.orgId = params['id'];
    });
   this.getEvents();
  }

  resendList(list) {
    this.events = [].concat(list);
  }

  getEvents() {
    this.eventService.getEvents(this.orgId)
    .subscribe(
    (data: EventList[]) => {
      this.events = (data['events'] && data['events'].length > 0 ) ? data['events'] :  [];
    },
    (err) => {
      this.showToast('Internal server Error');
    });
  }
  openDialog(title, data?, index?, event?) {
    if (event) {
      event.stopPropagation();
    }
    const dialogRef = this.dialog.open(EntityDialogComponent, {
      data: {
        header : `Add Event`,
        entityData: data ? data : null,
        entityType: 'Event'
      },
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== '') {
        if (title === 'add') {
          result['data']['createdAt'] = Date();
          result['data']['organizationId'] = this.orgId;
          result['data']['imageUrl'] = result['file'];
          this.createOrganization(result['data']);
        }
      }
    });
  }

  createOrganization(formData) {
    this.eventService.create(formData)
    .subscribe(
      (data: EventList) => {
        this.showToast('Event Create Sucessfully');
        this.events.unshift(data['event']);
        this.events = [].concat(this.events);
      },
      (err) => {
        this.showToast('Internal server Error');
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

  applyFilter(filterValue: string) {
    this.filterValue = filterValue.trim().toLowerCase();
  }
}

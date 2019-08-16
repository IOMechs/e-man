import { EventItem } from './../../core/models/event-item';
import { MatDialog, MatSnackBar } from '@angular/material';
import { EventsService } from './../../core/services/events/events.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EntityDialogComponent } from '../../shared/components/entity-dialog/entity-dialog.component';
import { OrganizationService } from 'src/app/core/services/organizations/organization.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'em-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent implements OnInit, OnDestroy {

  orgId: string;
  orgName: string;
  events: EventItem[] = [];
  filterValue = '';
  isComponentAlive = true;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventsService,
    private organizationService: OrganizationService,
    private dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.orgId = params.id;
    });
    this.getOrganization();
    this.getEvents();
  }

  ngOnDestroy() {
    this.isComponentAlive = false;
  }

  getOrganization() {
    this.organizationService.getOrganizationById(this.orgId)
    .pipe(
      takeWhile(() => this.isComponentAlive)
    )
    .subscribe((organizationData) => {
      this.orgName = organizationData.organization.name;
    });
  }

  resendList(list) {
    this.events = [].concat(list);
  }

  getEvents() {
    this.eventService.getEvents(this.orgId)
    .pipe(
      takeWhile(() => this.isComponentAlive)
    )
    .subscribe(
    (data) => {
      this.events = (data.events && data.events.length > 0 ) ? data.events :  [];
    },
    (err) => {
      this.showToast('Internal server error');
    });
  }
  addNewEvent() {
    if (event) {
      event.stopPropagation();
    }
    const dialogRef = this.dialog.open(EntityDialogComponent, {
      data: {
        header : `Add Event`,
        entityType: 'Event'
      },
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result !== null) {
        result.data.createdAt = Date();
        result.data.organizationId = this.orgId;
        result.data.imageUrl = result.file;
        this.createOrganization(result.data);
      }
    });
  }

  createOrganization(formData) {
    this.eventService.create(formData)
    .pipe(
      takeWhile(() => this.isComponentAlive)
    )
    .subscribe(
      (data) => {
        this.showToast('Event created successfully');
        this.events = [data.event, ...this.events];
      },
      (err) => {
        this.showToast('Internal server error');
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

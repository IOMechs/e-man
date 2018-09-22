import { MatDialog, MatSnackBar } from '@angular/material';
import { EventsService } from './../../core/services/events/events.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'em-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  orgId: any;
  events: any = {type: 'event', list: [], orgId: null};

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
      // tslint:disable-next-line:max-line-length
      this.events = (data.events && data.events.length > 0 ) ? {type: 'event', list: data.events, orgId: this.orgId} :  {type: 'event', list: [], orgId: this.orgId };
    },
    err => {
      console.log(err);
      this.snackBar.open(`Internal Server Error`, '' , {
        duration: 5000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
    });
  }
}

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
  constructor(private route: ActivatedRoute, private eventService: EventsService) {
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
      console.log(data);
    },
    err => {
      console.log(err);
    });
  }

}

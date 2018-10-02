import { UploadImagesDialogComponent } from './../../shared/components/upload-images-dialog/upload-images-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { EventsService } from '../../core/services/events/events.service';

export interface Image {
  id: string;
  url: string;
}

@Component({
  selector: 'em-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {

  images: Image[] = [];
  eventId: string;
  event: any;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private eventService: EventsService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventId = params['eventId'];
    });
    this.getEvent();
  }

  getEvent() {
    console.log(this.eventId);
    this.eventService.getEvents(this.eventId, true)
    .subscribe(
    (data: any) => {
      this.event = (data.event) ? data.event :  {};
      this.images = data.event && data.event.eventImages ? data.event.eventImages : [];
    },
    (err) => {
      this.showToast('Internal server Error');
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(UploadImagesDialogComponent, {
      data: {
        images: this.images
      },
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== '') {
        console.log(result);
      }
    });
  }

  showToast(message) {
    this.snackBar.open(message, '' , {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

}

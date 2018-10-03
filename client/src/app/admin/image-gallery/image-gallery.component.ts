import { Image } from './../../core/models/image';
import { ImageService } from './../../core/services/image/image.service';
import { EventItem } from './../../core/models/event-item';
import { UploadImagesDialogComponent } from './../../shared/components/upload-images-dialog/upload-images-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { EventsService } from '../../core/services/events/events.service';
import { EmanConfig } from '../../core/config/eman-config';

@Component({
  selector: 'em-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {

  apiBaseUrl: string =  EmanConfig.apiBaseUrl;
  images: Image[] = [];
  eventId: string;
  event: EventItem;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private eventService: EventsService,
    private snackBar: MatSnackBar,
    private imageService: ImageService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventId = params['eventId'];
    });
    this.getEvent();
    this.getImages();
  }

  getEvent() {
    this.eventService.getEventById(this.eventId)
    .subscribe(
    (data) => {
      this.event = (data) ? data :  {};
    },
    (err) => {
      this.showToast('Internal server Error');
    });
  }

  getImages() {
    this.imageService.get(this.eventId)
    .subscribe(
    (data: Image[]) => {
      this.images = (data) ? data :  [];
    },
    (err) => {
      this.showToast('Internal server Error');
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(UploadImagesDialogComponent, {
      data: {
        entityId: this.eventId
      },
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.upload) {
          console.log(result);
         this.images = result.upload.concat(this.images);
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

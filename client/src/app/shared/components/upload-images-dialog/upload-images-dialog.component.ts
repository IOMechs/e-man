import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ImageService } from '../../../core/services/image/image.service';

@Component({
  selector: 'em-upload-images-dialog',
  templateUrl: './upload-images-dialog.component.html',
  styleUrls: ['./upload-images-dialog.component.scss']
})
export class UploadImagesDialogComponent implements OnInit {
  id: string;
  imageList = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UploadImagesDialogComponent>,
    private imageService: ImageService
  ) { }

  ngOnInit() {
    this.id = this.data.entityId;
  }

  uploadDone(response) {
    if (response.event.type === 4) {
      if (response.event.body.status === 'success') {
        const uploaddImage = response.event.body.image;
        this.imageList.push(uploaddImage);
      }
      this.dialogRef.close({
        upload: this.imageList
      });
    }
  }

}

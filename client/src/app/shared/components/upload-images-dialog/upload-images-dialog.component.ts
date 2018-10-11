import { environment } from './../../../../environments/environment';
import { Image } from './../../../core/models/image';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ImageService } from '../../../core/services/image/image.service';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'em-upload-images-dialog',
  templateUrl: './upload-images-dialog.component.html',
  styleUrls: ['./upload-images-dialog.component.scss']
})
export class UploadImagesDialogComponent implements OnInit {
  id: string;
  imageList: Array<Image> = [];
  apiBaseUrl: string = environment.apiBaseUrl;
  uploader: FileUploader = new FileUploader({
      url: this.apiBaseUrl + '/file/upload?id=' + this.data.entityId,
      itemAlias: 'file',
      isHTML5: true,
      method: 'POST',
    });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UploadImagesDialogComponent>,
    private imageService: ImageService
  ) { }

  ngOnInit() {
    this.id = this.data.entityId;
  }

  uploadDone(response) {
    if (response.event.type === 4 && response.event.body.status === 'success') {
      const uploaddImage = response.event.body.image;
      this.imageList.push(uploaddImage);
      this.dialogRef.close({
        upload: this.imageList
      });
    }
  }

}

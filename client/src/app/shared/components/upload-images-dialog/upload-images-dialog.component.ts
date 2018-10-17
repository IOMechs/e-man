import { environment } from './../../../../environments/environment';
import { Image } from './../../../core/models/image';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ImageService } from '../../../core/services/image/image.service';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { NgxSpinnerService } from 'ngx-spinner';

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
      url: this.apiBaseUrl + '/file/upload?entityId=' + this.data.entityId,
      itemAlias: 'file',
      isHTML5: true,
      method: 'POST',
    });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UploadImagesDialogComponent>,
    private imageService: ImageService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.uploadDone(JSON.parse(response));
    };
  }

  uploadDone(response) {
    this.imageList.push({path: response.image.path});
    if (this.imageList.length === this.uploader.queue.length) {
      this.spinner.hide();
      this.dialogRef.close({
        upload: this.imageList
      });
    }
  }

  submitEntity(queue) {
    this.spinner.show();
    if (queue && queue.length > 0) {
      this.uploader.uploadAll();
    } else {
      this.dialogRef.close({
        upload: '',
      });
    }
  }

  removeItem(ele) {
    if (this.uploader.queue.length === 1) {
      this.uploader.queue = [];
    } else {
      const index = this.uploader.queue.indexOf(ele);
      this.uploader.queue = this.uploader.queue.splice(index, 1);
    }
  }

}

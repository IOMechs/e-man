import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'em-upload-images-dialog',
  templateUrl: './upload-images-dialog.component.html',
  styleUrls: ['./upload-images-dialog.component.scss']
})
export class UploadImagesDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UploadImagesDialogComponent>
  ) { }

  ngOnInit() {
  }

  submitEntity(queue) {
    // const files = queue['_results'];
    if (queue) {
      queue.uploadAll();
    } else {
      this.dialogRef.close({
        file: this.data.images
      });
    }
  }

  uploadDone(response) {
    // let n
    console.log(response);
    if (response.event.type === 4) {
      this.dialogRef.close({
        file: response.event.body
      });
    }

  }

}

import { environment } from './../../../../environments/environment';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder , Validators, FormControl } from '@angular/forms';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';


@Component({
  selector: 'em-entity-dialog',
  templateUrl: './entity-dialog.component.html',
  styleUrls: ['./entity-dialog.component.scss']
})
export class EntityDialogComponent implements OnInit {
  isOrganization: boolean;
  entityDialogForm: FormGroup;
  apiBaseUrl: string = environment.apiBaseUrl;
  uploader: FileUploader = new FileUploader({
      url: this.apiBaseUrl + '/file/upload' +  ((!this.data.entityData) ?  '' : ('?id=' + this.data.entityData._id)) ,
      itemAlias: 'file',
      isHTML5: true,
      method: 'POST',
    });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EntityDialogComponent>
  ) {
    this.isOrganization = this.data.entityType === 'Organization' ? true : false;
  }

  ngOnInit() {
    this.entityDialogForm = this.formBuilder.group({
      name: ['', [
          Validators.required,
        ]
      ],
      description: ['', [
          Validators.required
        ]
      ],
      eventDate: ['', [
          Validators.required
        ]
      ]
    });
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
    this.uploadDone(JSON.parse(response));
    };
    this.resettValidators();
    this.setEntityValue();
  }
  get entityControls() { return this.entityDialogForm.controls; }

  resettValidators() {
    if (this.data.entityType === 'Organization') {
      this.entityDialogForm.controls['eventDate'].setValidators(null);
    }
  }

  setEntityValue() {
    if (this.data.entityData) {
      this.entityDialogForm.patchValue(this.data.entityData);
    }
  }

  submitEntity(queue) {
    if (queue && queue.length > 0) {
      this.uploader.uploadAll();
    } else {
      this.dialogRef.close({
        file: null,
        data: this.entityDialogForm.value
      });
    }
  }

  uploadDone(response) {
    this.dialogRef.close({
      file: response.path,
      data: this.entityDialogForm.value
    });
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

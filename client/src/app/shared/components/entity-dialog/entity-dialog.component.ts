import { environment } from './../../../../environments/environment';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder , Validators, FormControl } from '@angular/forms';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';


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
      url: this.apiBaseUrl + '/file/upload',
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
    // const files = queue.file;
    if (queue && queue.length > 0) {
      this.uploader.uploadAll();
    } else {
      this.dialogRef.close({
        file: '',
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

}

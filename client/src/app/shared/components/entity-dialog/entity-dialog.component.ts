import { environment } from './../../../../environments/environment';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder , Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'em-entity-dialog',
  templateUrl: './entity-dialog.component.html',
  styleUrls: ['./entity-dialog.component.scss']
})
export class EntityDialogComponent implements OnInit {
  isOrganization: boolean;
  entityDialogForm: FormGroup;
  apiBaseUrl: string = environment.apiBaseUrl;

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
    const files = queue['_results'];
    if (files && files[0]) {
      files[0].upload();
    } else {
      this.dialogRef.close({
        file: '',
        data: this.entityDialogForm.value
      });
    }
  }

  uploadDone(response) {
    console.log(response);
    if (response.event.type === 4) {
      this.dialogRef.close({
        file: response.event.body.path,
        data: this.entityDialogForm.value
      });
    }

  }

}

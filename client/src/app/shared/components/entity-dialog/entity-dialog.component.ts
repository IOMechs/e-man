import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder , Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'em-entity-dialog',
  templateUrl: './entity-dialog.component.html',
  styleUrls: ['./entity-dialog.component.scss']
})
export class EntityDialogComponent implements OnInit {
  isOrganization: boolean;
  entityDialogForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder) {
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

  getData(file, formData) {
    const value = {
        file: file,
        data : formData
    };
    return value;
  }

}

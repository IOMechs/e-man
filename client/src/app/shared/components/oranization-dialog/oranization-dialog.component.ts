import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder , Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'em-oranization-dialog',
  templateUrl: './oranization-dialog.component.html',
  styleUrls: ['./oranization-dialog.component.scss']
})
export class OranizationDialogComponent implements OnInit {

  organizationDialogForm: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.organizationDialogForm = this.formBuilder.group({
      name: ['', [
          Validators.required,
        ]
      ],
      description: ['', [
          Validators.required
        ]
      ],
      organizationDate: ['', [
          Validators.required
        ]
      ]
    });
  }
  get organizationControls() { return this.organizationDialogForm.controls; }
}

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'em-delete-warning-dialog',
  templateUrl: './delete-warning-dialog.component.html',
  styleUrls: ['./delete-warning-dialog.component.scss']
})
export class DeleteWarningDialogComponent implements OnInit {

  entityName: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,) { 
    this.entityName = this.data.entityName;
  }

  ngOnInit() {
  }

}

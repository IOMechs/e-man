import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'em-entity-header',
  templateUrl: './entity-header.component.html',
  styleUrls: ['./entity-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntityHeaderComponent implements OnInit {

  @Input() heading: string;
  @Input() btnText: string;
  @Input() organizationName: string;
  @Output() filterString = new EventEmitter<any>();
  @Output() openModal = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  applyFilter(value) {
    this.filterString.emit(value.trim().toLowerCase());
  }
  addEntity() {
    this.openModal.emit();
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OranizationDialogComponent } from './oranization-dialog.component';

describe('OranizationDialogComponent', () => {
  let component: OranizationDialogComponent;
  let fixture: ComponentFixture<OranizationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OranizationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OranizationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

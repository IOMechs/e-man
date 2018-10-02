import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImagesDialogComponent } from './upload-images-dialog.component';

describe('UploadImagesDialogComponent', () => {
  let component: UploadImagesDialogComponent;
  let fixture: ComponentFixture<UploadImagesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadImagesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadImagesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

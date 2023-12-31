import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageModelComponent } from './image-model.component';

describe('ImageUploadComponent', () => {
  let component: ImageModelComponent;
  let fixture: ComponentFixture<ImageModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

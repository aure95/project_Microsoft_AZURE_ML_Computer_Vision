import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSearchComponent } from './image-search.component';
import {MatChipsModule} from '@angular/material/chips';

describe('ImageSearchComponent', () => {
  let component: ImageSearchComponent;
  let fixture: ComponentFixture<ImageSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

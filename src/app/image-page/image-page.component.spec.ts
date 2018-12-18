import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePageComponent } from './image-page.component';

describe('ImagePageComponent', () => {
  let component: ImagePageComponent;
  let fixture: ComponentFixture<ImagePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextHeadingPageComponent } from './text-heading-page.component';

describe('TextHeadingPageComponent', () => {
  let component: TextHeadingPageComponent;
  let fixture: ComponentFixture<TextHeadingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextHeadingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextHeadingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

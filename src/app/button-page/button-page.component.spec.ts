import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPageComponent } from './button-page.component';

describe('ButtonPageComponent', () => {
  let component: ButtonPageComponent;
  let fixture: ComponentFixture<ButtonPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

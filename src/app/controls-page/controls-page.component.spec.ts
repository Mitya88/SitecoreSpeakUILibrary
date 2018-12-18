import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsPageComponent } from './controls-page.component';

describe('ControlsPageComponent', () => {
  let component: ControlsPageComponent;
  let fixture: ComponentFixture<ControlsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

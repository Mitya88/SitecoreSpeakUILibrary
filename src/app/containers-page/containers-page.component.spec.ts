import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainersPageComponent } from './containers-page.component';

describe('ContainersPageComponent', () => {
  let component: ContainersPageComponent;
  let fixture: ComponentFixture<ContainersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePageComponent } from './table-page.component';

describe('TablePageComponent', () => {
  let component: TablePageComponent;
  let fixture: ComponentFixture<TablePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

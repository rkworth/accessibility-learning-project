import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompliantPersonnelGridComponent } from './personnel-grid.component';

describe('CompliantPersonnelGridComponent', () => {
  let component: CompliantPersonnelGridComponent;
  let fixture: ComponentFixture<CompliantPersonnelGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompliantPersonnelGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompliantPersonnelGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

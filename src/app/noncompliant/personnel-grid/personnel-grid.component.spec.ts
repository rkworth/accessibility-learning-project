import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelGridComponent } from './personnel-grid.component';

describe('PersonnelGridComponent', () => {
  let component: PersonnelGridComponent;
  let fixture: ComponentFixture<PersonnelGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnelGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

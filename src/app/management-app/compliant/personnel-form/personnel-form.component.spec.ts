import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompliantPersonnelFormComponent } from './personnel-form.component';

describe('CompliantPersonnelFormComponent', () => {
  let component: CompliantPersonnelFormComponent;
  let fixture: ComponentFixture<CompliantPersonnelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompliantPersonnelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompliantPersonnelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

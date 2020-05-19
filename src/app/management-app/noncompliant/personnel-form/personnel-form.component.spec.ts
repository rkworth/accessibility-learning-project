import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoncompliantPersonnelFormComponent } from './personnel-form.component';

describe('NoncompliantPersonnelFormComponent', () => {
  let component: NoncompliantPersonnelFormComponent;
  let fixture: ComponentFixture<NoncompliantPersonnelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoncompliantPersonnelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoncompliantPersonnelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

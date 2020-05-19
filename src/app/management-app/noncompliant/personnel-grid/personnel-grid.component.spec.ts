import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoncompliantPersonnelGridComponent } from './personnel-grid.component';

describe('NoncompliantPersonnelGridComponent', () => {
  let component: NoncompliantPersonnelGridComponent;
  let fixture: ComponentFixture<NoncompliantPersonnelGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoncompliantPersonnelGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoncompliantPersonnelGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

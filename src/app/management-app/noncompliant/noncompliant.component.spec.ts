import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementNoncompliantComponent } from './noncompliant.component';

describe('NoncompliantComponent', () => {
  let component: ManagementNoncompliantComponent;
  let fixture: ComponentFixture<ManagementNoncompliantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementNoncompliantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementNoncompliantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementCompliantComponent } from './compliant.component';

describe('compliantComponent', () => {
  let component: ManagementCompliantComponent;
  let fixture: ComponentFixture<ManagementCompliantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementCompliantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementCompliantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

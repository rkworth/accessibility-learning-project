import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompliantSidebarComponent } from './sidebar.component';

describe('CompliantSidebarComponent', () => {
  let component: CompliantSidebarComponent;
  let fixture: ComponentFixture<CompliantSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompliantSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompliantSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoncompliantSidebarComponent } from './sidebar.component';

describe('NoncompliantSidebarComponent', () => {
  let component: NoncompliantSidebarComponent;
  let fixture: ComponentFixture<NoncompliantSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoncompliantSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoncompliantSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

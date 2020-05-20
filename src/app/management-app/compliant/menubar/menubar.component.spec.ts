import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompliantMenubarComponent } from './menubar.component';

describe('CompliantMenubarComponent', () => {
  let component: CompliantMenubarComponent;
  let fixture: ComponentFixture<CompliantMenubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompliantMenubarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompliantMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

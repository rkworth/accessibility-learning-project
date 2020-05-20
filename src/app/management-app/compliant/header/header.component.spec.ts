import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompliantHeaderComponent } from './header.component';

describe('CompliantHeaderComponent', () => {
  let component: CompliantHeaderComponent;
  let fixture: ComponentFixture<CompliantHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompliantHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompliantHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

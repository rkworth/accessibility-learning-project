import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoncompliantHeaderComponent } from './header.component';

describe('NoncompliantHeaderComponent', () => {
  let component: NoncompliantHeaderComponent;
  let fixture: ComponentFixture<NoncompliantHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoncompliantHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoncompliantHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

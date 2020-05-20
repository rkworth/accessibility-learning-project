import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoncompliantMenubarComponent } from './menubar.component';

describe('NoncompliantMenubarComponent', () => {
  let component: NoncompliantMenubarComponent;
  let fixture: ComponentFixture<NoncompliantMenubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoncompliantMenubarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoncompliantMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

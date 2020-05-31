import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NoncompliantEmptyPageComponent } from "./empty-page.component";

describe("NoncompliantEmptyPageComponent", () => {
  let component: NoncompliantEmptyPageComponent;
  let fixture: ComponentFixture<NoncompliantEmptyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoncompliantEmptyPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoncompliantEmptyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

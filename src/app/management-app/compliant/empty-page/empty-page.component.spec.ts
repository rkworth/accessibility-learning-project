import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CompliantEmptyPageComponent } from "./empty-page.component";

describe("CompliantEmptyPageComponent", () => {
  let component: CompliantEmptyPageComponent;
  let fixture: ComponentFixture<CompliantEmptyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompliantEmptyPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompliantEmptyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

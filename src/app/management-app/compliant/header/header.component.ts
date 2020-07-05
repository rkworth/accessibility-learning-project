import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "alp-compliant-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class CompliantHeaderComponent {
  @ViewChild("title", { static: true }) title: ElementRef;

  focusTitle() {
    this.title.nativeElement.focus();
  }
}

import { Component, OnInit, ViewChild } from "@angular/core";
import { CompliantHeaderComponent } from './header/header.component';

@Component({
  selector: "alp-management-compliant",
  templateUrl: "./compliant.component.html",
  styleUrls: ["./compliant.component.scss"],
})
export class ManagementCompliantComponent implements OnInit {
  @ViewChild(CompliantHeaderComponent, { static: true }) header: CompliantHeaderComponent;

  constructor() {}

  ngOnInit(): void {
    this.header.focusTitle();
  }
}

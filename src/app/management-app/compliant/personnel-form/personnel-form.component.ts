import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Claimant } from "../models/claimant";
declare const compliantDialog: any;

@Component({
  selector: "alp-compliant-personnel-form",
  templateUrl: "./personnel-form.component.html",
  styleUrls: ["./personnel-form.component.scss"],
})
export class CompliantPersonnelFormComponent {
  @ViewChild("title", { static: true }) title: ElementRef;
  @Output() formClosed = new EventEmitter();

  public curClaimant: Claimant;
  public oldClaimant: Claimant;

  constructor() {
    this.curClaimant = new Object();
    this.oldClaimant = new Object();
  }

  show(): void {
    compliantDialog.openDialog("editModal", null, null);
  }

  setClaimant(claimant: Claimant): void {
    this.oldClaimant = claimant;
    this.curClaimant = Object.assign({}, claimant);
  }

  onClose(closeButton): void {
    compliantDialog.closeDialog(closeButton);
    this.formClosed.emit();
  }

  onSave(closeButton) {
    Object.assign(this.oldClaimant, this.curClaimant);
    this.onClose(closeButton);
  }
}

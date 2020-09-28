import { Component } from "@angular/core";
import { Claimant } from "../models/claimant";
declare const noncompliantDialog: any;

@Component({
  selector: "alp-noncompliant-personnel-form",
  templateUrl: "./personnel-form.component.html",
  styleUrls: ["./personnel-form.component.scss"],
})
export class NoncompliantPersonnelFormComponent {
  curClaimant: Claimant;
  oldClaimant: Claimant;

  constructor() {
    this.curClaimant = new Object();
    this.oldClaimant = new Object();
  }
  show(): void {
    noncompliantDialog.openDialog("editModal");
  }

  onClose(closeButton): void {
    noncompliantDialog.closeDialog(closeButton);
  }

  onSave(closeButton) {
    Object.assign(this.oldClaimant, this.curClaimant);
    this.onClose(closeButton);
  }

  setClaimant(claimant: Claimant): void {
    this.oldClaimant = claimant;
    this.curClaimant = Object.assign({}, claimant);
  }
}

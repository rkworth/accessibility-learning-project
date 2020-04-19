import { Component, Inject } from '@angular/core';

import { Claimant } from '../models/claimant';

@Component({
  selector: 'alp-personnel-form',
  templateUrl: './personnel-form.component.html',
  styleUrls: ['./personnel-form.component.scss']
})
export class PersonnelFormComponent {

  curClaimant: Claimant;
  constructor() {
    this.curClaimant = new Object();
    this.curClaimant.firstName = "First";
    this.curClaimant.lastName = "Claimant";
    this.curClaimant.address1 = "123 Fake St";
    this.curClaimant.city = "hooville";
    this.curClaimant.state = "Deleware"
    this.curClaimant.zip = "60652";
  }

  onCancel() {

  }

  onSave() {

  }

}

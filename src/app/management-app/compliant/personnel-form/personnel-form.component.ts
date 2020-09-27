import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Claimant } from '../models/claimant';


@Component({
  selector: 'alp-compliant-personnel-form',
  templateUrl: './personnel-form.component.html',
  styleUrls: ['./personnel-form.component.scss']
})
export class CompliantPersonnelFormComponent {
	@ViewChild('title', {static: true}) title: ElementRef;
	@Output() formClosed = new EventEmitter();

	curClaimant: Claimant;
	oldClaimant: Claimant;

	constructor() {
		this.curClaimant = new Object();
		this.oldClaimant = new Object();
	}

	onCancel(): void {
		this.hide();
	}

	onSave(): void {
		Object.assign(this.oldClaimant, this.curClaimant);
		this.hide();
	}

	show(): void {
		document.getElementById('claimant_form').style.display = 'block';
		document.getElementById('shroud').style.display = 'block';
		this.focusTitle();
	}

	hide(): void {
		document.getElementById('claimant_form').style.display = 'none';
		document.getElementById('shroud').style.display = 'none';
		this.formClosed.emit();
	}

	setClaimant(claimant: Claimant): void {
		this.oldClaimant = claimant;
		this.curClaimant = Object.assign({}, claimant);
	}

	focusTitle() {
		this.title.nativeElement.focus();
	}
}

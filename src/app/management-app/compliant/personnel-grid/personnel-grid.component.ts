import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';

import { NoncompliantPersonnelFormComponent } from '../personnel-form/personnel-form.component';
import { Claimant } from '../models/claimant';

import { Observable, of, from } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'alp-compliant-personnel-grid',
  templateUrl: './personnel-grid.component.html',
  styleUrls: ['./personnel-grid.component.scss']
})
export class NoncompliantPersonnelGridComponent implements OnInit {
	
	@ViewChild('personnelForm') personnelForm;
	
	headers = ['lastName','firstName','city','state'];
	
	data: Claimant[] = [
		{id: 1, firstName: 'Alfred', middleName: 'E', lastName: 'Neuman', city: 'Mad', state: 'Mag', zip: '20180'},
		{id: 2, firstName: 'Michael', middleName: 'C', lastName: 'Jordan', city: 'Chicago', state: 'Il', zip: '60652'},
		{id: 3, firstName: 'Homer', middleName: 'J', lastName: 'Simpson', city: 'Springfeild', state: 'Idk', zip: '20212'},
		{id: 4, firstName: 'Taraji', middleName: 'P', lastName: 'Henson', city: 'Atlantic City', state: 'Nj', zip: '66601'},
		{id: 5, firstName: 'Irene', middleName: 'P', lastName: 'Freely', city: 'Whereever', state: '', zip: ''},
		{id: 6, firstName: 'Al', middleName: '', lastName: 'Coholhic', city: '', state: '', zip: ''},
		{id: 7, firstName: 'Number1', middleName: '', lastName: 'Claimant', city: '', state: '', zip: ''},
		{id: 8, firstName: 'Number2', middleName: '', lastName: 'Claimant', city: '', state: '', zip: ''},
		{id: 9, firstName: 'Number3', middleName: '', lastName: 'Claimant', city: '', state: '', zip: ''},
		{id: 10, firstName: 'Number4', middleName: '', lastName: 'Claimant', city: '', state: '', zip: ''},
		{id: 11, firstName: 'Number5', middleName: '', lastName: 'Claimant', city: '', state: '', zip: ''},
		{id: 12, firstName: 'Number6', middleName: '', lastName: 'Claimant', city: '', state: '', zip: ''},
		{id: 13, firstName: 'Number7', middleName: '', lastName: 'Claimant', city: '', state: '', zip: ''},
		{id: 14, firstName: 'Number8', middleName: '', lastName: 'Claimant', city: '', state: '', zip: ''},
		{id: 15, firstName: 'Number9', middleName: '', lastName: 'Claimant', city: '', state: '', zip: ''},
		{id: 16, firstName: 'Number10', middleName: '', lastName: 'Claimant', city: '', state: '', zip: ''}
	];

	private subject = new BehaviorSubject<Claimant[]>(this.data);
	
	dataSource: Observable<Claimant[]> = this.subject.asObservable();
	
	selection = new SelectionModel<Claimant>(true, []);
	
	constructor(private cdr: ChangeDetectorRef) { }

	ngOnInit(): void {
	}

	doSelect(row): void {
		this.selection.clear();
		this.selection.select(row);
	}
	
	onAdd(): void {
		var newClaimant:Claimant = {};
		newClaimant.id = this.data.length + 1;
		this.data.push(newClaimant);
		this.doSelect(newClaimant);
		this.onEdit();
	}
	
	onEdit(): void {
		this.openPersonnelForm(this.selection.selected[0]);
	}
	
	onDelete(): void {
		for (var i=0; i<this.data.length; i++) {
			if (this.data[i] === this.selection.selected[0]) {
				this.data.splice(i, 1);
				this.selection.clear();
				break;
			}
		}
		this.subject.next(this.data);
	}
	
	openPersonnelForm(claimant: Claimant): void {
		this.personnelForm.setClaimant(claimant);
		this.personnelForm.show();
	}
	
}

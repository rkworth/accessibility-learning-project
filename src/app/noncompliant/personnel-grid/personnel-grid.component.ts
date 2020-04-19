import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { PersonnelFormComponent } from '../personnel-form/personnel-form.component';

@Component({
  selector: 'alp-personnel-grid',
  templateUrl: './personnel-grid.component.html',
  styleUrls: ['./personnel-grid.component.scss']
})
export class PersonnelGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

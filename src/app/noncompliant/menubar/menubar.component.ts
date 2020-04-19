import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'alp-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  onPersonnel(): void {
	  this.router.navigate([{outlets: {minor_container_outlet: '/personnel'}}]);
  }

}

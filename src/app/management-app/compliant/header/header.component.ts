import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'alp-compliant-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class CompliantHeaderComponent implements OnInit {
  @ViewChild('title', {static: true}) title: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  focusTitle() {
    this.title.nativeElement.focus();
  }
}

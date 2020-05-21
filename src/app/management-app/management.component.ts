import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

enum AppType {
  Compliant = "Compliant",
  Noncompliant = "Noncompliant"
}

@Component({
  selector: 'alp-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  
  public currentApp: AppType;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const url = window.location.pathname;
    this.currentApp = url.includes('noncompliant') ? AppType.Noncompliant : AppType.Compliant;
  }

  switchApps() {
    if (this.currentApp === AppType.Noncompliant) {
      this.router.navigate(['compliant'], { relativeTo: this.route });
      this.currentApp = AppType.Compliant;
    } else if (this.currentApp === AppType.Compliant) {
      this.router.navigate(['noncompliant'], { relativeTo: this.route });
      this.currentApp = AppType.Noncompliant;
    }
  }
}

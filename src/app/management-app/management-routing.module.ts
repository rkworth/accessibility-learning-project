import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManagementComponent } from "./management.component";
import { ManagementCompliantComponent } from "./compliant/compliant.component";
import { CompliantPersonnelFormComponent } from "./compliant/personnel-form/personnel-form.component";
import { CompliantPersonnelGridComponent } from "./compliant/personnel-grid/personnel-grid.component";
import { ManagementNoncompliantComponent } from "./noncompliant/noncompliant.component";
import { NoncompliantPersonnelFormComponent } from "./noncompliant/personnel-form/personnel-form.component";
import { NoncompliantPersonnelGridComponent } from "./noncompliant/personnel-grid/personnel-grid.component";

const routes: Routes = [
  { path: "management",
    component: ManagementComponent, 
    children: [
      {
        path: "noncompliant",
        component: ManagementNoncompliantComponent,
        children: [
          {
            path: "personnel",
            component: NoncompliantPersonnelGridComponent
          },
          {
            path: "form",
            component: NoncompliantPersonnelFormComponent
          },
        ],
      },
      {
        path: "compliant",
        component: ManagementCompliantComponent,
        children: [
          {
            path: "personnel",
            component: CompliantPersonnelGridComponent
          },
          {
            path: "form",
            component: CompliantPersonnelFormComponent
          },
        ],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ManagementAppRoutingModule {}

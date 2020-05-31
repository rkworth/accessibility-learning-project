import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManagementCompliantComponent } from "./compliant/compliant.component";
import { CompliantEmptyPageComponent } from "./compliant/empty-page/empty-page.component";
import { CompliantPersonnelFormComponent } from "./compliant/personnel-form/personnel-form.component";
import { CompliantPersonnelGridComponent } from "./compliant/personnel-grid/personnel-grid.component";
import { ManagementComponent } from "./management.component";
import { NoncompliantEmptyPageComponent } from "./noncompliant/empty-page/empty-page.component";
import { ManagementNoncompliantComponent } from "./noncompliant/noncompliant.component";
import { NoncompliantPersonnelFormComponent } from "./noncompliant/personnel-form/personnel-form.component";
import { NoncompliantPersonnelGridComponent } from "./noncompliant/personnel-grid/personnel-grid.component";

const routes: Routes = [
  {
    path: "management",
    component: ManagementComponent,
    children: [
      {
        path: "noncompliant",
        component: ManagementNoncompliantComponent,
        children: [
          {
            path: "personnel",
            component: NoncompliantPersonnelGridComponent,
          },
          {
            path: "form",
            component: NoncompliantPersonnelFormComponent,
          },
          {
            path: "empty",
            component: NoncompliantEmptyPageComponent,
          },
          {
            path: "",
            redirectTo: "personnel",
            pathMatch: "full",
          },
        ],
      },
      {
        path: "compliant",
        component: ManagementCompliantComponent,
        children: [
          {
            path: "personnel",
            component: CompliantPersonnelGridComponent,
          },
          {
            path: "form",
            component: CompliantPersonnelFormComponent,
          },
          {
            path: "empty",
            component: CompliantEmptyPageComponent,
          },
          {
            path: "",
            redirectTo: "personnel",
            pathMatch: "full",
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ManagementAppRoutingModule {}

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CompliantComponent } from "./compliant/compliant.component";
import { HomeComponent } from "./home/home.component";
import { ManagementComponent } from "./management-app/management.component";
import { ManagementCompliantComponent } from "./management-app/compliant/compliant.component";
import { CompliantPersonnelFormComponent } from "./management-app/compliant/personnel-form/personnel-form.component";
import { CompliantPersonnelGridComponent } from "./management-app/compliant/personnel-grid/personnel-grid.component";
import { ManagementNoncompliantComponent } from "./management-app/noncompliant/noncompliant.component";
import { NoncompliantPersonnelFormComponent } from "./management-app/noncompliant/personnel-form/personnel-form.component";
import { NoncompliantPersonnelGridComponent } from "./management-app/noncompliant/personnel-grid/personnel-grid.component";
import { ResourcesComponent } from "./resources/resources.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
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
  },
  { path: "compliant", component: CompliantComponent },
  { path: "resources", component: ResourcesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

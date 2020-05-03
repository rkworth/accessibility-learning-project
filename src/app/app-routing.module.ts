import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CompliantComponent } from "./compliant/compliant.component";
import { HomeComponent } from "./home/home.component";
import { NoncompliantComponent } from "./noncompliant/noncompliant.component";
import { PersonnelFormComponent } from "./noncompliant/personnel-form/personnel-form.component";
import { PersonnelGridComponent } from "./noncompliant/personnel-grid/personnel-grid.component";
import { ResourcesComponent } from "./resources/resources.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {
    path: "noncompliant",
    component: NoncompliantComponent,
    children: [
      {
        path: "personnel",
        component: PersonnelGridComponent
      },
      {
        path: "form",
        component: PersonnelFormComponent
      },
    ],
  },
  { path: "compliant", component: CompliantComponent },
  { path: "resources", component: ResourcesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

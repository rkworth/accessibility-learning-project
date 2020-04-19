import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CompliantComponent } from "./compliant/compliant.component";
import { HomeComponent } from "./home/home.component";
import { NoncompliantComponent } from "./noncompliant/noncompliant.component";
import { ResourcesComponent } from "./resources/resources.component";
import { PersonnelGridComponent } from "./noncompliant/personnel-grid/personnel-grid.component";
import { PersonnelFormComponent } from "./noncompliant/personnel-form/personnel-form.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "noncompliant", component: NoncompliantComponent },
  { path: "compliant", component: CompliantComponent },
  { path: "resources", component: ResourcesComponent },
  { path: "personnel", component: PersonnelGridComponent, outlet: "minor_container_outlet"},
  { path: "form", component: PersonnelFormComponent, outlet: "minor_container_outlet"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

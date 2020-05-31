import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ManagementCompliantComponent } from "./compliant/compliant.component";
import { CompliantHeaderComponent } from "./compliant/header/header.component";
import { CompliantMenubarComponent } from "./compliant/menubar/menubar.component";
import { CompliantPersonnelFormComponent } from "./compliant/personnel-form/personnel-form.component";
import { CompliantPersonnelGridComponent } from "./compliant/personnel-grid/personnel-grid.component";
import { CompliantSidebarComponent } from "./compliant/sidebar/sidebar.component";
import { ManagementAppRoutingModule } from "./management-routing.module";
import { ManagementComponent } from "./management.component";
import { NoncompliantHeaderComponent } from "./noncompliant/header/header.component";
import { NoncompliantMenubarComponent } from "./noncompliant/menubar/menubar.component";
import { ManagementNoncompliantComponent } from "./noncompliant/noncompliant.component";
import { NoncompliantPersonnelFormComponent } from "./noncompliant/personnel-form/personnel-form.component";
import { NoncompliantPersonnelGridComponent } from "./noncompliant/personnel-grid/personnel-grid.component";
import { NoncompliantSidebarComponent } from "./noncompliant/sidebar/sidebar.component";

@NgModule({
  declarations: [
    ManagementComponent,
    ManagementCompliantComponent,
    ManagementNoncompliantComponent,
    CompliantSidebarComponent,
    CompliantHeaderComponent,
    CompliantMenubarComponent,
    NoncompliantSidebarComponent,
    NoncompliantHeaderComponent,
    NoncompliantMenubarComponent,
    CompliantPersonnelGridComponent,
    CompliantPersonnelFormComponent,
    NoncompliantPersonnelGridComponent,
    NoncompliantPersonnelFormComponent,
  ],
  imports: [ManagementAppRoutingModule, BrowserModule, FormsModule],
})
export class ManagementAppModule {}

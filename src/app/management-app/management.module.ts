import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { ManagementAppRoutingModule } from './management-routing.module';

import { ManagementComponent } from './management.component'
import { ManagementCompliantComponent } from './compliant/compliant.component';
import { ManagementNoncompliantComponent } from './noncompliant/noncompliant.component';
import { CompliantSidebarComponent } from './compliant/sidebar/sidebar.component';
import { CompliantHeaderComponent } from './compliant/header/header.component';
import { CompliantMenubarComponent } from './compliant/menubar/menubar.component';
import { CompliantPersonnelGridComponent } from './compliant/personnel-grid/personnel-grid.component';
import { CompliantPersonnelFormComponent } from './compliant/personnel-form/personnel-form.component';
import { NoncompliantSidebarComponent } from './noncompliant/sidebar/sidebar.component';
import { NoncompliantHeaderComponent } from './noncompliant/header/header.component';
import { NoncompliantMenubarComponent } from './noncompliant/menubar/menubar.component';
import { NoncompliantPersonnelGridComponent } from './noncompliant/personnel-grid/personnel-grid.component';
import { NoncompliantPersonnelFormComponent } from './noncompliant/personnel-form/personnel-form.component';

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
    NoncompliantPersonnelFormComponent
  ],
  imports: [
    ManagementAppRoutingModule,
    BrowserModule,
    MatTableModule,
    FormsModule
  ]
})
export class ManagementAppModule { }

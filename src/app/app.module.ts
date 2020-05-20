import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { ManagementComponent } from './management-app/management.component'
import { ManagementCompliantComponent } from './management-app/compliant/compliant.component';
import { ManagementNoncompliantComponent } from './management-app/noncompliant/noncompliant.component';
import { CompliantComponent } from './compliant/compliant.component';
import { ResourcesComponent } from './resources/resources.component';
import { CompliantSidebarComponent } from './management-app/compliant/sidebar/sidebar.component';
import { CompliantHeaderComponent } from './management-app/compliant/header/header.component';
import { CompliantMenubarComponent } from './management-app/compliant/menubar/menubar.component';
import { CompliantPersonnelGridComponent } from './management-app/compliant/personnel-grid/personnel-grid.component';
import { CompliantPersonnelFormComponent } from './management-app/compliant/personnel-form/personnel-form.component';
import { NoncompliantSidebarComponent } from './management-app/noncompliant/sidebar/sidebar.component';
import { NoncompliantHeaderComponent } from './management-app/noncompliant/header/header.component';
import { NoncompliantMenubarComponent } from './management-app/noncompliant/menubar/menubar.component';
import { NoncompliantPersonnelGridComponent } from './management-app/noncompliant/personnel-grid/personnel-grid.component';
import { NoncompliantPersonnelFormComponent } from './management-app/noncompliant/personnel-form/personnel-form.component';

import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ManagementComponent,
    ManagementCompliantComponent,
    ManagementNoncompliantComponent,
    CompliantComponent,
    ResourcesComponent,
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
    RouterModule,
    BrowserModule,
    MatTableModule,
    MatTabsModule,
    CdkTableModule,
    AppRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

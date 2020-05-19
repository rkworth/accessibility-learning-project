import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { ManagementComponent } from './management-app/management.component'
import { ManagementNoncompliantComponent } from './management-app/noncompliant/noncompliant.component';
import { CompliantComponent } from './compliant/compliant.component';
import { ResourcesComponent } from './resources/resources.component';
import { SidebarComponent } from './management-app/noncompliant/sidebar/sidebar.component';
import { HeaderComponent } from './management-app/noncompliant/header/header.component';
import { MenubarComponent } from './management-app/noncompliant/menubar/menubar.component';
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
    ManagementNoncompliantComponent,
    CompliantComponent,
    ResourcesComponent,
    SidebarComponent,
    HeaderComponent,
    MenubarComponent,
    NoncompliantPersonnelGridComponent,
    NoncompliantPersonnelFormComponent
  ],
  imports: [
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

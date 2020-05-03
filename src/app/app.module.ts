import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { NoncompliantComponent } from './noncompliant/noncompliant.component';
import { CompliantComponent } from './compliant/compliant.component';
import { ResourcesComponent } from './resources/resources.component';
import { SidebarComponent } from './noncompliant/sidebar/sidebar.component';
import { HeaderComponent } from './noncompliant/header/header.component';
import { MenubarComponent } from './noncompliant/menubar/menubar.component';
import { PersonnelGridComponent } from './noncompliant/personnel-grid/personnel-grid.component';
import { PersonnelFormComponent } from './noncompliant/personnel-form/personnel-form.component';

import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoncompliantComponent,
    CompliantComponent,
    ResourcesComponent,
    SidebarComponent,
    HeaderComponent,
    MenubarComponent,
    PersonnelGridComponent,
    PersonnelFormComponent
  ],
  imports: [
    BrowserModule,
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

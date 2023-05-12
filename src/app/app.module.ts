import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';
import { StaffLoginComponent } from './auth/staff-login/staff-login.component';


@NgModule({
  declarations: [
    AppComponent,
    StaffLoginComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    CommonModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

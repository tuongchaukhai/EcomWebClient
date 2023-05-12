import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomerTopbarComponent } from './customer-topbar/customer-topbar.component';
import { CustomSidebarComponent } from './custom-sidebar/custom-sidebar.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerTopbarComponent,
    CustomSidebarComponent,
    CustomerLoginComponent,
    CustomerRegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CustomerRoutingModule
  ],
  exports: [
    CustomerTopbarComponent
  ]
})
export class CustomerModule { }

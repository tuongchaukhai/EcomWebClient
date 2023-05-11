import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductListComponent } from './product/product-list/product-list.component';
import { AdminComponent } from './admin.component';


import { AdminTopbarComponent } from './admin-topbar.component';
import { AdminSidebarComponent } from './admin-sidebar.component';
import { AdminMenuComponent } from './admin-menu.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ProductUpdateComponent } from './product/product-update/product-update.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerUpdateComponent } from './customer/customer-update/customer-update.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';

@NgModule({
  declarations: [
    ProductListComponent,
    AdminComponent,
    AdminTopbarComponent,
    AdminSidebarComponent,
    AdminMenuComponent,
    ProductUpdateComponent,
    ProductCreateComponent,
    DashboardComponent,
    UserListComponent,
    UserCreateComponent,
    UserUpdateComponent,
    CustomerListComponent,
    CustomerUpdateComponent,
    CustomerCreateComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,

  ]
})
export class AdminModule {
}

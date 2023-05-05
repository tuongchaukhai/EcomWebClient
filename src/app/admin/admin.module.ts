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

@NgModule({
  declarations: [
    ProductListComponent,
    AdminComponent,
    AdminTopbarComponent,
    AdminSidebarComponent,
    AdminMenuComponent,
    ProductUpdateComponent,
    ProductCreateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,

  ]
})
export class AdminModule {
}

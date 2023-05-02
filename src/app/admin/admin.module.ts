import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductListComponent } from './product/product-list/product-list.component';
import { AdminComponent } from './admin.component';

import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { AdminTopbarComponent } from './admin-topbar.component';
import { AdminSidebarComponent } from './admin-sidebar.component';
import { AdminMenuComponent } from './admin-menu.component';

@NgModule({
  declarations: [
    ProductListComponent,
    AdminComponent,
    AdminTopbarComponent,
    AdminSidebarComponent,
    AdminMenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TableModule,
    MenubarModule,
    InputMaskModule

  ]
})
export class AdminModule { }

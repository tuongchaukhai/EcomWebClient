import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { 
        path: '',
        component: DashboardComponent,
      },
      { 
        path: 'product',
        component: ProductListComponent
      },
      { 
        path: 'product/:id',
        component: ProductDetailComponent
      },

      {
        path: 'employee',
        component: UserListComponent
      },

      {
        path: 'customer',
        component: CustomerListComponent,
      },

    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

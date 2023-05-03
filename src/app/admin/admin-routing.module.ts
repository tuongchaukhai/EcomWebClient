import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: 'product', component: ProductListComponent },
      { path: 'product/:id', component: ProductDetailComponent}
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

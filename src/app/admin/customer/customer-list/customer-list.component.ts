import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer/customer.service';
import { LazyLoadEvent } from 'primeng/api';
import { ProductUpdateComponent } from '../../product/product-update/product-update.component';
import { DialogService } from 'primeng/dynamicdialog';
import { ToastService } from 'src/app/services/toast.service';
import { ProductCreateComponent } from '../../product/product-create/product-create.component';
import { CustomerCreateComponent } from '../customer-create/customer-create.component';
import { CustomerUpdateComponent } from '../customer-update/customer-update.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {
  customers: any;
  totalRecords: number = 0;
  rows: number = 10;
  page: number = 1;
  visibleDeleteDialog: boolean = false;
  selectedCustomer: any;
  constructor(private customerService: CustomerService, private dialogService: DialogService, private toastService: ToastService) {
    this.load();
  }

  load(): void {
    this.customerService.getAll(this.page, this.rows).subscribe(response => {
      this.customers = response.data.customers;
      this.totalRecords = response.data.totalrecords;
    });
  }

  loadLazy(event: LazyLoadEvent): void {
    const page = (event.first! / event.rows!) + 1;
    this.customerService.getAll(page, this.rows).subscribe(response => {
      this.customers = response.data.customers;
    });
  }

  createShow(): void {
    const ref = this.dialogService.open(CustomerCreateComponent, {
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
    });

    ref.onClose.subscribe(() => {
    this.load();
    });

  }

  updateShow(customer: any): void {
    const ref = this.dialogService.open(CustomerUpdateComponent, {
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      data: { customer }
    });

    ref.onClose.subscribe(() => this.load());

  }

  deleteShow(customer: any): void {
    this.visibleDeleteDialog = true;
    this.selectedCustomer = customer;
  }

  deleteProduct(customer: any): void {
    this.visibleDeleteDialog = false;
    this.customerService.delete(customer.customerId).subscribe(
      response => {
        this.toastService.showSuccess(response.message);
        this.load();
      },
      err => err
    );
  }
}

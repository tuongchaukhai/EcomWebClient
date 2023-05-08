import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductUpdateComponent } from '../product-update/product-update.component';
import { ProductUpdateDto } from '../dto/product-update.dto';
import { ProductResultDto } from '../dto/product-result.dto';
import { ProductCreateComponent } from '../product-create/product-create.component';
import { LazyLoadEvent } from 'primeng/api';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  visibleDeleteDialog: boolean = false;
  selectedProduct?: any;
  public page: number = 1;
  public rows: number = 5;
  layout: string = 'list';
  totalRecords: number = 0;

  constructor(private dialogService: DialogService, private productService: ProductService) { }

  ngOnInit(): void {
    this.load();
  }

  loadLazy(event: LazyLoadEvent) {
    const page = (event.first! / event.rows!) + 1;
    this.productService.getAll(page, this.rows).subscribe(results => {
      this.products = results.data.products;
    });
  }


  load(): void {
    this.productService.getAll(this.page,this.rows).subscribe(
      response => { this.products = response.data.products; this.totalRecords = response.data.totalRecords; }
    );
  }


  updateShow(product: ProductUpdateDto): void {
    const ref = this.dialogService.open(ProductUpdateComponent, {
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      data: { product }
    });

    ref.onClose.subscribe(() => this.load());

  }

  deleteShow(product: any): void {
    this.visibleDeleteDialog = true;
    this.selectedProduct = product;
  }

  deleteProduct(product: any): void {

    this.productService.delete(product.productId).subscribe(
      response => {

        alert(response);
      },
      err => err
    );
  }

  createShow(): void {
    const ref = this.dialogService.open(ProductCreateComponent, {
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
    });

    ref.onClose.subscribe(() => {

      this.load();
    });

  }
}

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductUpdateComponent } from '../product-update/product-update.component';
import { ProductUpdateDto } from '../dto/product-update.dto';
import { ProductResultDto } from '../dto/product-result.dto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  ref?: DynamicDialogRef;
  visibleDeleteDialog: boolean = false;
  selectedProduct?: any;
  constructor(private dialogService: DialogService, private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(
      response => this.products = response.data,
    );
  }

  updateShow(product: ProductUpdateDto): void {
    this.ref = this.dialogService.open(ProductUpdateComponent, {
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      data: { product }
    });

    this.ref.onClose.subscribe(() =>
      this.productService.getAll().subscribe(
        response => this.products = response.data,
      ));

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
}

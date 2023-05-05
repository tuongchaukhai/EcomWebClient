import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductUpdateComponent } from '../product-update/product-update.component';
import { ProductUpdateDto } from '../dto/product-update.dto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  ref?: DynamicDialogRef;
  visible: boolean = false;
  constructor(private dialogService: DialogService, private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(
      response => this.products = response.data,
    );
  }

  updateShow(product: ProductUpdateDto) {
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

    // this.visible = true;
  }
}

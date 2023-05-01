import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { ProductDto } from '../dto/product.dto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  product: ProductDto[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    
    this.productService.getAll().subscribe(
      response => this.product = response,
      err => err
    );
  }
}

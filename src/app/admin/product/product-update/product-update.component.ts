import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CategoryService } from '../../services/category/category.service';
import { ProductUpdateDto } from '../dto/product-update.dto';
import { ProductService } from '../../services/product/product.service';


@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})

export class ProductUpdateComponent implements OnInit {
  formData: FormGroup;
  categories: any[] = [];

  constructor(private fb: FormBuilder, public config: DynamicDialogConfig, private categoryService: CategoryService, private ref: DynamicDialogRef, private productService: ProductService) {
    this.formData = this.fb.group({
      productId: [this.config.data.product.productId],
      productName: [this.config.data.product.productName, [Validators.required, Validators.maxLength(255)]],
      shortDesc: [this.config.data.product.shortDesc, [Validators.maxLength(255)]],
      description: [this.config.data.product.description],
      price: [this.config.data.product.price, [Validators.required, Validators.pattern("^[0-9]*$")]],
      discount: [this.config.data.product.discount, [Validators.pattern("^[0-9]*$")]],
      thumb: [this.config.data.product.thumb, [Validators.required, Validators.maxLength(255)]],
      video: [this.config.data.product.video, [Validators.maxLength(255)]],
      bestSeller: [this.config.data.product.bestSeller, [Validators.required]],
      homeFlag: [this.config.data.product.homeFlag, [Validators.required]],
      active: [this.config.data.product.active, [Validators.required]],
      tags: [this.config.data.product.tags],
      alias: [this.config.data.product.alias, [Validators.maxLength(255)]],
      metaDesc: [this.config.data.product.metaDesc, [Validators.maxLength(255)]],
      metaKey: [this.config.data.product.metaKey, [Validators.maxLength(255)]],
      unitInStock: [this.config.data.product.unitInStock, [Validators.required, Validators.pattern("^[0-9]*$")]],
      categoryId: [this.config.data.product.categoryID]
    });
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(
      response => {
        this.categories = response.data
      },
      err => err
    );
  }

  saveProduct() {
    this.productService.update(this.formData.value).subscribe(
      response => {
        alert(response);
        this.ref.close();
      },
      err => err
    );
  }

  cancel() {
    this.ref.close();
  }



}

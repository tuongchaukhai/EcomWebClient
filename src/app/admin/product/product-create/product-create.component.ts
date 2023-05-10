import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductService } from '../../services/product/product.service';
import { CategoryService } from '../../services/category/category.service';
import { ProductAddDto } from '../dto/product-add.dto';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {
  formData: FormGroup = this.fb.group({
    productName: ['', [Validators.required, Validators.maxLength(255)]],
    shortDesc: ['', [Validators.maxLength(255)]],
    description: [''],
    price: [0, [Validators.required, Validators.pattern('^[0-9]*$')]],
    discount: [null, [Validators.pattern('^[0-9]*$')]],
    thumb: ['', [Validators.required, Validators.maxLength(255)]],
    video: ['', [Validators.maxLength(255)]],
    bestSeller: [false, [Validators.required]],
    homeFlag: [false, [Validators.required]],
    active: [false, [Validators.required]],
    tags: [''],
    alias: ['', [Validators.maxLength(255)]],
    metaDesc: ['', [Validators.maxLength(255)]],
    metaKey: ['', [Validators.maxLength(255)]],
    unitInStock: [0, [Validators.required, Validators.pattern("^[0-9]*$")]],
    categoryId: [0]
  });
  categories: any[] = [];

  constructor(private toastService: ToastService, private fb: FormBuilder, private ref: DynamicDialogRef, private productService: ProductService, private categoryService: CategoryService) {
    this.categoryService.getAll().subscribe(response => this.categories = response.data);
  }

  submit() {
    const product: ProductAddDto = {
      productName: this.formData.value.productName,
      shortDesc: this.formData.value.shortDesc,
      description: this.formData.value.description,
      price: this.formData.value.price,
      discount: this.formData.value.discount,
      thumb: this.formData.value.thumb,
      video: this.formData.value.video,
      homeFlag: this.formData.value.homeFlag,
      active: this.formData.value.active,
      bestSeller: this.formData.value.bestSeller,
      tags: this.formData.value.tags,
      alias: this.formData.value.alias,
      metaDesc: this.formData.value.metaDesc,
      metaKey: this.formData.value.metaKey,
      unitInStock: this.formData.value.unitInStock,
      categoryId: this.formData.value.categoryId
    }
    this.productService.create(product).subscribe(
      response => {
        this.toastService.showSuccess(response.message);
        this.ref.close();
      },
      err => err
    );
  }

  cancel() {
    this.ref.close();
  }
}

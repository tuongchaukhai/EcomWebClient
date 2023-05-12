import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductUpdateComponent } from '../product-update/product-update.component';
import { ProductUpdateDto } from '../dto/product-update.dto';
import { ProductCreateComponent } from '../product-create/product-create.component';
import { LazyLoadEvent, MenuItem } from 'primeng/api';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  visibleDeleteDialog: boolean = false;
  selectedProduct?: any;
  page: number = 1;
  rows: number = 5;
  layout: string = 'list';
  totalRecords: number = 0;
  selectedFile: File | null | undefined;
  splitButtonMenu: MenuItem[] = [];
  title: string = 'Product';

  // headArray: string[] = ['productId', 'productName','thumb', 'price', 'unitInStock', 'categoryName'];
  headArray: any[] = [
    { 'Head': 'ID', 'fieldName': 'productId' },
    { 'Head': 'Title', 'fieldName': 'productName' },
    { 'Head': 'Image', 'fieldName': 'thumb' },
    { 'Head': 'Price', 'fieldName': 'price' },
    { 'Head': 'Quantity', 'fieldName': 'unitInStock' },
    { 'Head': 'Category', 'fieldName': 'categoryName' },
  ];

  constructor(private toastService: ToastService, private dialogService: DialogService, private productService: ProductService) {
    this.splitButtonMenu = [
      {
        label: 'Import',
        icon: 'pi pi-download',
        command: () => {
          const fileInput = document.createElement('input');
          fileInput.type = 'file';
          fileInput.accept = '.csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
          fileInput.addEventListener('change', (event: any) => {
            this.onFileSelected(event);
            this.uploadFile();
          });
          fileInput.click();
        }
      },
      {
        label: 'Export',
        icon: 'pi pi-upload',
        command: () => {
          this.exportDataToCSV()
        }
      }
    ];
  }

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
    this.productService.getAll(this.page, this.rows).subscribe(
      response => { this.products =  response.data.products; this.totalRecords = response.data.totalRecords; }
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

  // deleteShow(product: any): void {
  //   this.selectedProduct = product;
  //   // this.visibleDeleteDialog = true;

  // }

  deleteProduct(product: any): void {
    debugger
    this.productService.delete(product.productId).subscribe(
      response => {
        this.toastService.showSuccess(response.message);
        this.load();
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

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    const files = target.files;

    if (files && files.length > 0) {
      this.selectedFile = files.item(0);
    }
  }

  uploadFile(): void {
    if (this.selectedFile) {
      const formData: FormData = new FormData();
      formData.append('file', this.selectedFile);


      this.productService.uploadFile(formData).subscribe(
        response => {
          if (response.success) {
            this.load();
          }
        },
        error => {
          // Handle error response
        }
      );
    }
  }

  exportDataToCSV(): void {
    this.productService.exportDataToCSV();
  }
}

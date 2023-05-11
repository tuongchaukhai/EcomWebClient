import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.scss']
})
export class CustomerUpdateComponent implements OnInit {
  formData: FormGroup;

  constructor(private fb: FormBuilder, public config: DynamicDialogConfig){
    this.formData = this.fb.group({
      customerId: [this.config.data.customer.customerId],
      fullName: [this.config.data.customer.fullName, [Validators.required, Validators.maxLength(150)]],
      birthDay: [this.config.data.customer.birthDay],
      avatar: [this.config.data.customer.avatar, [Validators.maxLength(150)]],
      email: [this.config.data.customer.email, [Validators.required, Validators.maxLength(150),Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(12),Validators.minLength(8)]],
  address: [this.config.data.customer.address, [Validators.required]],
      district: [this.config.data.customer.district, [Validators.required]],
      ward: [this.config.data.customer.ward, [Validators.required]],
      active: [this.config.data.customer.active]
    });
  }

  ngOnInit(): void {

  }

}

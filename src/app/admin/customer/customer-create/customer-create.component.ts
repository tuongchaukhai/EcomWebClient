import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer/customer.service';
import { ToastService } from 'src/app/services/toast.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent {
formData: FormGroup = this.fb.group({
  fullName: ['', [Validators.required, Validators.maxLength(150)]],
  birthDay: [new Date()],
  avatar: ['', [Validators.maxLength(150)]],
  email: ['', [Validators.required, Validators.maxLength(150),Validators.email]],
  password: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$')]],
  phone: ['', [Validators.required, Validators.maxLength(12),Validators.minLength(8)]],
  address: ['', [Validators.required]],
  district: ['', [Validators.required]],
  ward: ['', [Validators.required]],
  active: [true]
});
  constructor(private ref: DynamicDialogRef, private fb: FormBuilder, private customerService: CustomerService, private toastService: ToastService) {}

  submit(): void {
    if (this.formData.valid)
      this.customerService.create(this.formData.value).subscribe(response => {
        debugger
        if (response.success) {
          this.toastService.showSuccess(response.message);
          this.ref.close();
        }
      })
    else
      alert('Invalid form data');
  }
}

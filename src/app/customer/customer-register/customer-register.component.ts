import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.scss']
})
export class CustomerRegisterComponent {
  formData: FormGroup = this.fb.group({
    fullName: ['', [Validators.required, Validators.maxLength(150)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(150)]],
    password: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$')]],
    phone: ['', [Validators.required, Validators.maxLength(12),Validators.minLength(8)]],
  });

  constructor(private authService: AuthService, private fb: FormBuilder, private toastService: ToastService, private router: Router) {

  }

  submit() {
    this.authService.register(this.formData.value).subscribe(response => {
      if (response.success){
        this.toastService.showSuccess(response.message);
        this.router.navigate(['/']);
      }
    });
  }
}

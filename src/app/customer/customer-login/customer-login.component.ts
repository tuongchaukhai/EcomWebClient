import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.scss']
})
export class CustomerLoginComponent {
  formData: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email, Validators.maxLength(150)]],
    password: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$')]],
  });

  constructor(private authService: AuthService, private fb: FormBuilder, private toastService: ToastService, private router: Router) {

  }

  submit() {
    this.authService.login(this.formData.value).subscribe(response => {
      if (response.success){
        this.toastService.showSuccess(response.message);
        this.router.navigate(['/']);
      }
    });
  }
}

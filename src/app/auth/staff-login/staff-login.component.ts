import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { LoginDto } from '../dto/login.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.scss']
})
export class StaffLoginComponent {
  formData: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  submit(): void {
    const dto: LoginDto = {
      email: this.formData.value.email,
      password: this.formData.value.password
    }
    this.authService.staffLogin(dto).subscribe(response => {
      if (response.success) {
        alert(response.message);
        this.router.navigate(['admin']);
      }
    })
  }
}

import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoleService } from '../../services/role/role.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {
  formData: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email, Validators.maxLength(150)]],
    fullName: ['', [Validators.required, Validators.maxLength(150)]],
    password: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$')]],
    active: [false, [Validators.required]],
    roleId: [0, [Validators.required]]
  });

  formInputValid = false;
  roles: [] = [];
  constructor(private toastService: ToastService, private userService: UserService, private fb: FormBuilder, private roleService: RoleService, private ref: DynamicDialogRef) {

    this.roleService.getAll().subscribe(response => {
      this.roles = response.data;
    });
  }


  submit(): void {
    if (this.formData.valid)
      this.userService.create(this.formData.value).subscribe(response => {
        if (response.success) {
          this.toastService.showSuccess(response.message);
          this.ref.close();
        }
      })
    else
      alert('Invalid form data');
  }


}


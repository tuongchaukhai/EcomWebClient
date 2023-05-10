import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RoleService } from '../../services/role/role.service';
import { UserService } from '../../services/user/user.service';
import { UserUpdateEdto } from '../dto/user-update.dto';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent {
  formData: FormGroup = this.fb.group({});
  roles: any;
  constructor(private fb: FormBuilder, private config: DynamicDialogConfig, private ref: DynamicDialogRef, private roleService: RoleService, private userService: UserService) {
    debugger
    this.formData = this.fb.group({
      userId: [this.config.data.user.userId],
      email: [this.config.data.user.email, [Validators.required, Validators.email, Validators.maxLength(150)]],
      fullName: [this.config.data.user.fullName, [Validators.required, Validators.maxLength(150)]],
      // password: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$')]],
      active: [this.config.data.user.active, [Validators.required]],
      roleId: [this.config.data.user.roleId, [Validators.required]]
      
    });

    this.roleService.getAll().subscribe(response => this.roles = response.data)
  }

  submit(): void {

    const user: UserUpdateEdto = {
      userId: this.formData.value.userId,
      email: this.formData.value.email,
      fullName: this.formData.value.fullName,
      // password: this.formData.value.password,
      active: this.formData.value.active,
      roleId: this.formData.value.roleId
    }
    this.userService.update(user).subscribe(
      response => {
        alert(response.message);
        this.ref.close();
      });

  }
}

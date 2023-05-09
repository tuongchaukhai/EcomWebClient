import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../auth/service/auth.service';
import { Observable } from 'rxjs';
import { UserTokenInfo } from '../auth/dto/user-token-info.dto';

@Component({
  selector: 'app-admin-topbar',
  template: `<div class="card">
  <p-menubar >
      <ng-template pTemplate="start">
          <img src="https://primefaces.org/cdn/primeng/images/primeng.svg" height="40" class="mr-2" />
      </ng-template>
      <ng-template pTemplate="end">
          <p-splitButton label="Hello, {{name}}" [model]="this.items" styleClass="p-button-text mr-2 mb-2"></p-splitButton>
      </ng-template>
  </p-menubar>
</div>`
})
export class AdminTopbarComponent implements OnInit {
  items: MenuItem[] = [];
  name: any;

  constructor(private authService: AuthService) {
    this.name = this.authService.userToken?.FullName;
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Settings',
        icon: 'pi pi-cog',
        // command: () => {
        //     this.update();
        // }
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        // command: () => {
        //     this.delete();
        // }
      }
    ]
  }
}

import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-admin-topbar',
  templateUrl: './admin-topbar.component.html',
})
export class AdminTopbarComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Products',
        icon: 'pi pi-fw pi-shopping-bag',
      },
      {
        label: 'Employees',
        icon: 'pi pi-fw pi-user',
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-users',
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
      }
    ];
  }
}

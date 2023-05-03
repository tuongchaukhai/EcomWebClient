import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
})
export class AdminSidebarComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Products',
        items: [
          {
            label: 'List',
            icon: 'pi pi-list',
          },
          {
            label: 'Create',
            icon: 'pi pi-plus',
          }
        ]
      },
      {
        label: 'Employees',
        items: [
          {
            label: 'List',
            icon: 'pi pi-list',
          },
          {
            label: 'Create',
            icon: 'pi pi-plus',
          }
        ]
      },
      {
        label: 'Customers',
        items: [
          {
            label: 'List',
            icon: 'pi pi-list',
          },
          {
            label: 'Create',
            icon: 'pi pi-plus',
          }
        ]
      }
    ];
  }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
})
export class AdminSidebarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private router: Router){}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Products',
        items: [
          {
            label: 'List',
            icon: 'pi pi-list',
            command: () => this.router.navigate(['/admin/product'])
          },
        ]
      },
      {
        label: 'Employees',
        items: [
          {
            label: 'List',
            icon: 'pi pi-list',
          },
        ]
      },
      {
        label: 'Customers',
        items: [
          {
            label: 'List',
            icon: 'pi pi-list',
          },
        ]
      }
    ];
  }
}
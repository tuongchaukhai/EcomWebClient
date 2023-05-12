import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-custom-sidebar',
  templateUrl: './custom-sidebar.component.html',
  styleUrls: ['./custom-sidebar.component.scss']
})
export class CustomSidebarComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Menu 1',
        items: [
          { label: 'Submenu 1.1', routerLink: 'submenu-1-1' },
          { label: 'Submenu 1.2', routerLink: 'submenu-1-2' }
        ]
      },
      {
        label: 'Menu 2',
        items: [
          { label: 'Submenu 2.1', routerLink: 'submenu-2-1' },
          { label: 'Submenu 2.2', routerLink: 'submenu-2-2' }
        ]
      }
    ];
  }


}

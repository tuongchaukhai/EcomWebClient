import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-admin-topbar',
  templateUrl: './admin-topbar.component.html',
})
export class AdminTopbarComponent implements OnInit {
  items: MenuItem[] = [];
  name: string = 'temp';

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

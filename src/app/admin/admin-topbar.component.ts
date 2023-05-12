import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../auth/service/auth.service';
import { Observable } from 'rxjs';
import { UserTokenInfo } from '../auth/dto/user-token-info.dto';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-admin-topbar',
  template: `<div class="card">
  <p-menubar >
      <ng-template pTemplate="start">
          <img src="https://primefaces.org/cdn/primeng/images/primeng.svg" height="40" class="mr-2" />
      </ng-template>
      <ng-template pTemplate="end">
        <button  pButton pRipple class="p-button-text p-button-rounded mr-2" (click)="op.toggle($event)">
        <i class="pi pi-bell" pBadge style="font-size: 1.5rem" value="2"></i>
        </button>
        <p-splitButton label="Hello, {{name$}}" [model]="this.items" styleClass="p-button-text mr-2 "></p-splitButton>
      </ng-template>
      <p-overlayPanel #op (onShow)="notiOnShow()" [style]="{width: '500px'}" >
      <div class="card" >

                <div class="flex align-items-center justify-content-between mb-4">
                    <h5>Notifications</h5>
                    <div>
                        <button pButton type="button" icon="pi pi-ellipsis-v" class="p-button-rounded p-button-text p-button-plain" (click)="menu.toggle($event)"></button>
                        <p-menu #menu [popup]="true" [model]="itemsMenuNoti"></p-menu>
                    </div>
                </div>
                <ul class="p-0 mx-0 mt-0 mb-4 list-none">
                    <li class="flex align-items-center py-2 border-bottom-1 surface-border" *ngFor="let toast of toastMessageList">
                        <span class="text-900 line-height-3">{{toast.timestamp | date}}: {{toast.detail}} </span>
                    </li>
                </ul>
       
            </div>    
      </p-overlayPanel>
  </p-menubar>
</div>`
})
export class AdminTopbarComponent implements OnInit {
  items: MenuItem[] = [];
  name$: any;
  toastMessageList: any;
  itemsMenuNoti: any;

  constructor(private authService: AuthService, private toastService: ToastService) {
    this.name$ = this.authService.userTokenSubject.getValue().FullName;
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
        command: () => this.authService.logOut()
      }
    ]

    this.itemsMenuNoti = [
      { label: 'Clear all', icon: 'pi pi-fw pi-trash' },
      // { label: 'Remove', icon: 'pi pi-fw pi-minus' }
    ];
  }

  notiOnShow(): void {
    this.toastMessageList = this.toastService.getToastMessages();
  }

  userLogout(): void {
    this.authService.logOut();
  }
}
